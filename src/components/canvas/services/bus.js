import { map, mapTo, tap, filter, switchMap, bufferCount, distinctUntilChanged } from 'rxjs/operators';
import { Subject, fromEvent, merge, of, empty } from 'rxjs';
import dragover from './events/dragover';
import drop from './events/drop';

export class CanvasEventBus {
  constructor() {
    this.subject = new Subject();
  }

  emit(event, metadata) {
    this.subject.next([event, metadata]);
  }

  getEventsStream(container) {
    return merge(
      this.getCanvasDragAndDropEventsStream(container),
      this.getCanvasResizeEventsStream(),
      this.getTabDragAndDropEventsStream(),
      this.getTabReorderEventsStream(),
      this.getTabSelectEventsStream(),
      this.getTabUpdateEventsStream(),
      this.getTabRemoveEventsStream()
    );
  }

  getCanvasDragAndDropEventsStream(container) {
    return merge(
      fromEvent(document, 'dragstart').pipe(map((e) => e.target.getAttribute('data-builder-id'))),
      fromEvent(document, 'dragend').pipe(mapTo(false))
    ).pipe(
      switchMap((builderId) => {
        if (builderId) {
          const dragover$ = dragover(container, of({ builderId }));
          const drop$ = drop(container, dragover$);

          return merge(
            dragover$.pipe(map((metadata) => ['dragover', metadata])),
            drop$.pipe(map((metadata) => ['drop', metadata]))
          ).pipe(
            filter(([event, { builderId, nodeId, sectors }]) =>
              event === 'drop' ? builderId && nodeId && sectors.length > 0 : true
            ),
            map(([event, metadata]) => [event, { destination: metadata }])
          );
        }

        return of(['dragend', {}]);
      })
    );
  }

  getCanvasResizeEventsStream() {
    return this.subject.asObservable().pipe(
      filter(([event, metadata]) => ['resize', 'resizestop'].includes(event)),
      filter(([event, metadata]) => metadata.flex > 0.1 && metadata.flex < 0.9),
      bufferCount(2),
      map((updates) => [updates[0][0], updates.map(([_, metadata]) => metadata)])
    );
  }

  getTabDragAndDropEventsStream() {
    return this.subject.asObservable().pipe(
      filter(([event, metadata]) => ['dragstart', 'dragend'].includes(event)),
    );
  }

  getTabReorderEventsStream() {
    return this.subject.asObservable().pipe(filter(([event, metadata]) => ['reorder'].includes(event)));
  }

  getTabSelectEventsStream() {
    return this.subject.asObservable().pipe(filter(([event, metadata]) => ['update'].includes(event)));
  }

  getTabUpdateEventsStream() {
    return this.subject.asObservable().pipe(filter(([event, metadata]) => ['select'].includes(event)));
  }

  getTabRemoveEventsStream() {
    return this.subject.asObservable().pipe(filter(([event, metadata]) => ['remove'].includes(event)));
  }
}

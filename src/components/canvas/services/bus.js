import { map, mapTo, filter, switchMap, bufferCount } from 'rxjs/operators';
import { Subject, fromEvent, merge, of, empty } from 'rxjs';
import dragover from './events/dragover';
import drop from './events/drop';
import { subjectToObservable } from './utils';

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
      this.getTabMoveEventsStream(),
      this.getTabSelectEventsStream(),
      this.getTabUpdateEventsStream(),
      this.getTabRemoveEventsStream()
    );
  }

  getCanvasDragAndDropEventsStream(container) {
    return merge(
      fromEvent(document, 'dragstart').pipe(map((e) => e.target.getAttribute('data-builder-id'))),
      fromEvent(document, 'dragend').pipe(mapTo(null))
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
    return subjectToObservable(this.subject, ['resize', 'resizestop']).pipe(
      filter(([event, metadata]) => metadata.flex > 0.1 && metadata.flex < 0.9),
      bufferCount(2),
      map((updates) => [updates[0][0], updates.map(([_, metadata]) => metadata)])
    );
  }

  getTabDragAndDropEventsStream = () => subjectToObservable(this.subject, ['dragstart', 'dragend']);
  getTabReorderEventsStream = () => subjectToObservable(this.subject, ['reorder']);
  getTabMoveEventsStream = () => subjectToObservable(this.subject, ['move']);
  getTabSelectEventsStream = () => subjectToObservable(this.subject, ['update']);
  getTabUpdateEventsStream = () => subjectToObservable(this.subject, ['select']);
  getTabRemoveEventsStream = () => subjectToObservable(this.subject, ['remove']);
}

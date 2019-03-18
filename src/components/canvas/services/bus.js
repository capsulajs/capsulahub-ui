import { map, mapTo, tap, filter, switchMap, bufferCount } from 'rxjs/operators';
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
      this.getDragAndDropEventsStream(container),
      this.getReorderEventsStream(),
      this.getResizeEventsStream(),
      this.getSelectEventsStream(),
      this.getUpdateEventsStream(),
      this.getRemoveEventsStream()
    );
  }

  getDragAndDropEventsStream(container) {
    return merge(
      fromEvent(document, 'dragstart').pipe(tap((e) => e.dataTransfer.setData('builderId', e.target.getAttribute('builder-id')))),
      fromEvent(document, 'dragend')
    ).pipe(
      switchMap((e) => {
        const builderId = e.dataTransfer.getData('builderId');

        if (builderId) {
          const dragover$ = dragover(container, of({ builderId }));
          const drop$ = drop(container, dragover$);

          return merge(
            dragover$.pipe(map((metadata) => ['dragover', metadata])),
            drop$.pipe(map((metadata) => ['drop', metadata]))
          ).pipe(
            filter(([type, metadata]) =>
              type === 'drop' ? metadata.builderId && metadata.nodeId && metadata.sectors.length > 0 : true
            )
          );
        }

        return of(['dragend', {}]);
      })
    );
  }

  getReorderEventsStream() {
    return this.subject.asObservable().pipe(
      filter(([event, metadata]) => ['reorder'].includes(event)),
      filter(([event, metadata]) => metadata.destination)
    )
  }

  getResizeEventsStream() {
    return this.subject.asObservable().pipe(
      filter(([event, metadata]) => ['resize', 'resizestop'].includes(event)),
      filter(([event, metadata]) => metadata.event.flex > 0.1 && metadata.event.flex < 0.9),
      bufferCount(2),
      map((updates) => [updates[0][0], updates.map(([_, metadata]) => metadata)])
    );
  }

  getSelectEventsStream() {
    return this.subject.asObservable().pipe(
      filter(([event, metadata]) => ['update'].includes(event)),
    );
  }

  getUpdateEventsStream() {
    return this.subject.asObservable().pipe(
      filter(([event, metadata]) => ['select'].includes(event)),
    );
  }

  getRemoveEventsStream() {
    return this.subject.asObservable().pipe(
      filter(([event, metadata]) => ['remove'].includes(event)),
    );
  }
}

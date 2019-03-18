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
      fromEvent(document, 'dragstart').pipe(
        map((e) => {
          const builderId = e.target.getAttribute('data-builder-id');
          const nodeId = e.target.getAttribute('data-node-id');
          const tabId = e.target.getAttribute('data-tab-id');
          return nodeId && tabId ? { builderId, source: { nodeId, tabId } } : { builderId };
        })
      ),
      fromEvent(document, 'dragend')
    ).pipe(
      switchMap((metadata) => {
        const { builderId, source } = metadata;

        if (builderId) {
          const dragover$ = dragover(container, of({ builderId, source }));
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
    );
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
    return this.subject.asObservable().pipe(filter(([event, metadata]) => ['update'].includes(event)));
  }

  getUpdateEventsStream() {
    return this.subject.asObservable().pipe(filter(([event, metadata]) => ['select'].includes(event)));
  }

  getRemoveEventsStream() {
    return this.subject.asObservable().pipe(filter(([event, metadata]) => ['remove'].includes(event)));
  }
}

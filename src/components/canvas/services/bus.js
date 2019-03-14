import { map, mapTo, tap, filter, switchMap } from 'rxjs/operators';
import { fromEvent, merge, of, empty } from 'rxjs';
import dragover from './events/dragover';
import drop from './events/drop';

export class CanvasEventBus {
  events$(container) {
    return merge(
      fromEvent(document, 'dragstart').pipe(
        tap(e => e.dataTransfer.setData('builderId', e.target.getAttribute('builder-id')))
      ),
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
            filter(([type, metadata]) => type === 'drop'
              ? metadata.builderId && metadata.nodeId && metadata.sectors.length > 0
              : true
            )
          );
        }

        return of(['dragend', {}]);
      })
    );
  }
}

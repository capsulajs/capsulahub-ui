import { map, mapTo, tap, distinctUntilChanged, filter } from 'rxjs/operators';
import { fromEvent, merge, combineLatest } from 'rxjs';
import { isEqual, findIndex } from 'lodash';
import { mergeMetadata, getSectorCouple, getDropzoneSectors } from './utils';

export class DragEventBus {
  events$(container) {
    let isEventStreamLocked = false;
    let cachedSectors = [];

    const dragstart$ = fromEvent(document, 'dragstart').pipe(
      map(e => ({ builderId: e.target.getAttribute('builder-id') }))
    );

    const dragover$ = combineLatest(
      dragstart$,
      fromEvent(container, 'dragover').pipe(
        map((e) => e.preventDefault() || [e.clientX, e.clientY]),
        distinctUntilChanged((a, b) => a.toString() === b.toString()),
        map((point) => document.elementFromPoint(...point)),
        map((node) => {
          if (node.id) {
            const classes = node.classList.value;
            const sectors = classes.includes('sector') ? classes.match(/\d+/g).map(Number) : [];
            cachedSectors = sectors.length === 1 ? getSectorCouple(cachedSectors, sectors[0]) : sectors;

            return {
              nodeId: node.id,
              sectors: cachedSectors
            };
          }
          return {};
        }),
        distinctUntilChanged((a, b) => isEqual(a, b))
      )
    ).pipe(map(mergeMetadata));

    const drop$ = combineLatest(
      dragover$,
      fromEvent(container, 'drop').pipe(mapTo({})),
    ).pipe(map(mergeMetadata));

    const dragend$ = fromEvent(document, 'dragend').pipe(mapTo(null));

    return merge(
      dragstart$.pipe(map((metadata) => ['dragstart', metadata])),
      dragover$.pipe(map((metadata) => ['dragover', metadata])),
      drop$.pipe(map((metadata) => ['drop', metadata])),
      dragend$.pipe(map((metadata) => ['dragend', metadata])),
    ).pipe(
      tap(([type]) => {
        switch (type) {
          case 'drop': isEventStreamLocked = true;
          case 'dragend': isEventStreamLocked = false;
          default: return;
        }
      }),
      filter(([type]) => !isEventStreamLocked),
      filter(([type, metadata]) => {
        switch (type) {
          case 'drop': Boolean(metadata.nodeId);
          default: return true;
        }
      })
    ).pipe(tap(console.log));
  }
}

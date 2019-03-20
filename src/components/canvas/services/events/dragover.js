import { map, distinctUntilChanged, scan } from 'rxjs/operators';
import { fromEvent, combineLatest } from 'rxjs';
import { isEqual } from 'lodash';
import { mergeMetadata, getSectorCouple } from '../utils';

export default (container, obs) => {
  return combineLatest(
    obs,
    fromEvent(container, 'dragover').pipe(
      map((e) => e.preventDefault() || [e.clientX, e.clientY]),
      distinctUntilChanged((a, b) => a.toString() === b.toString()),
      map((point) => document.elementFromPoint(...point)),
      scan((acc, curr) => {
        const nodeId = curr.getAttribute('data-node-id');

        if (nodeId) {
          const rawSectors = curr.getAttribute('data-sectors');
          const sectors = rawSectors.match(/\d+/g).map(Number);

          return {
            nodeId,
            sectors: sectors.length === 1 ? getSectorCouple(acc.sectors || [], sectors[0]) : sectors,
          };
        }

        return {};
      }, {}),
      distinctUntilChanged((a, b) => isEqual(a, b))
    )
  ).pipe(map(mergeMetadata));
};

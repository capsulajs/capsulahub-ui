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
      scan((acc, { id }) => {
        if (id && id.includes('dropzone')) {
          const [_, nodeId, sectorsList] = id.split(' ');
          const sectors = sectorsList.match(/\d+/g).map(Number);

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

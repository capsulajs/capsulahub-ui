import { map, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent, combineLatest } from 'rxjs';
import { isEqual } from 'lodash';
import { mergeMetadata, getSectorCouple } from '../utils';

export default (container, obs) => {
  let cachedSectors = [];

  return combineLatest(
    obs,
    fromEvent(container, 'dragover').pipe(
      map((e) => e.preventDefault() || [e.clientX, e.clientY]),
      distinctUntilChanged((a, b) => a.toString() === b.toString()),
      map((point) => document.elementFromPoint(...point)),
      map(({ id }) => {
        if (id && id.includes('dropzone')) {
          const [_, nodeId, sectorsList] = id.split(' ');
          const sectors = sectorsList.match(/\d+/g).map(Number);
          cachedSectors = sectors.length === 1 ? getSectorCouple(cachedSectors, sectors[0]) : sectors;

          return {
            nodeId,
            sectors: cachedSectors,
          };
        }

        return {};
      }),
      distinctUntilChanged((a, b) => isEqual(a, b))
    )
  ).pipe(map(mergeMetadata));
};

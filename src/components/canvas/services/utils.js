import { filter } from 'rxjs/operators';
import { intersection } from 'lodash';

export const mergeMetadata = (metadatas) => metadatas.reduce((a, b) => ({ ...a, ...b }), {});
export const getSectorCouple = (sectors, sector) => {
  const neighbors = {
    1: [2, 3],
    2: [1, 4],
    3: [1, 4],
    4: [2, 3],
  };

  return sectors.length === 2
    ? [sector, ...intersection(neighbors[sector], sectors)].sort()
    : [sector, neighbors[sector][sector % 2]].sort();
};

export const getDropzoneSectors = (dropzone) => (dropzone ? dropzone.sectors : []);
export const subjectToObservable = (subject, events) =>
  subject.asObservable().pipe(filter(([event, metadata]) => events.includes(event)));

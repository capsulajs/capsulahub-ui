import { intersection } from 'lodash';

export const mergeMetadata = (metadatas) => metadatas.reduce((a, b) => Object.assign({}, a, b), {});
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

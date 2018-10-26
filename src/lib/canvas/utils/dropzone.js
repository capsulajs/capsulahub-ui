import _ from 'lodash';
import { SECTORS_NEIGHBORS, SECTORS_MIN_SIZE } from '../constants';

export const isSmall = (container) => {
  const [w, h] = [container.offsetWidth, container.offsetHeight];
  return w < SECTORS_MIN_SIZE || h < SECTORS_MIN_SIZE;
};

export const couple = (sectors, sector) => {
  return sectors.length === 2
    ? [sector, ..._.intersection(SECTORS_NEIGHBORS[sector], sectors)].sort()
    : [sector, SECTORS_NEIGHBORS[sector][sector % 2]].sort();
};

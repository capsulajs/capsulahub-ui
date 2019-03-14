import { map, mapTo } from 'rxjs/operators';
import { fromEvent, combineLatest } from 'rxjs';
import { mergeMetadata } from '../utils';

export default (container, obs) => {
  return combineLatest(obs, fromEvent(container, 'drop').pipe(mapTo({}))).pipe(map(mergeMetadata));
};

// @flow
import moment from 'moment';

function memoize<K, V>(fn: (key: K) => V): (key: K) => V {
  const cacheMap: Map<K, V> = new Map();
  return (key: K): V => {
    const cacheKey = key;
    const cache = cacheMap.get(cacheKey);
    if (cache) {
      return cache;
    }
    const result = fn(key);
    cacheMap.set(cacheKey, result);
    return result;
  };
}

export default class Unit {
  static numToRem: number => string = memoize(
    (num: number): string => `${(num * 0.1).toFixed(1)}rem`
  );
  static formatDate = (date: Date): string =>
    moment(date).diff(Date.now(), 'days') === 0
      ? moment(date)
          .locale('id')
          .fromNow()
      : moment(date)
          .locale('id')
          .format('D MMMM');
  static deltaDate = (date: moment): number => date.diff(moment(), 'days');
}

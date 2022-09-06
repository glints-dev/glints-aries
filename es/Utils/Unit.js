import moment from 'moment';

function memoize(fn) {
  var cacheMap = new Map();
  return function (key) {
    var cacheKey = key;
    var cache = cacheMap.get(cacheKey);

    if (cache) {
      return cache;
    }

    var result = fn(key);
    cacheMap.set(cacheKey, result);
    return result;
  };
}

var Unit = function Unit() {};

Unit.numToRem = memoize(function (num) {
  return (num * 0.1).toFixed(1) + "rem";
});

Unit.formatDate = function (date) {
  return moment(date).diff(Date.now(), 'days') === 0 ? moment(date).locale('id').fromNow() : moment(date).locale('id').format('D MMMM');
};

Unit.deltaDate = function (date) {
  return date.diff(moment(), 'days');
};

export { Unit as default };
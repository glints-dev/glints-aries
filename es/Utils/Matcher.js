var Matcher = function Matcher() {};

Matcher.create = function (propName, pairs) {
  var map = new Map(pairs);
  return function (props) {
    var key = props[propName];
    return map.get(key);
  };
};

export { Matcher as default };
// @flow

type StyleProp = [string, any];

export default class Matcher {
  static create = (propName: string, pairs: Array<StyleProp>): any => {
    const map: Map<string, any> = new Map(pairs);
    return (props: Object) => {
      const key = props[propName];
      return map.get(key);
    };
  };
}

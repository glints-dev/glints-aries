type StyleProp = [string, any];

export default class Matcher {
  static create = (propName: string, pairs: Array<StyleProp>): any => {
    const map: Map<string, any> = new Map(pairs);
    return (props: { [propName: string]: any }) => {
      const key = props[propName];
      return map.get(key);
    };
  };
}

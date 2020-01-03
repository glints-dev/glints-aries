import * as React from 'react';
import createContext, { Context } from 'create-react-context';
const uikitAssets = require('../dist/public/manifest.json');

export class Uikit {
  publicPath: string;
  assetsMap: Map<string, string>;
  Link: React.ComponentType<any>;
  constructor(publicPath: string, LinkComponent: React.ComponentType<any>) {
    this.publicPath = publicPath;
    this.Link = LinkComponent;
    this.assetsMap = new Map(
      Object.keys(uikitAssets).map(asset => [
        asset,
        uikitAssets[asset as keyof typeof uikitAssets],
      ])
    );
  }
  getUrl = (assetPath: string): string =>
    `${this.publicPath}${this.assetsMap.get(assetPath) || 'notfound'}`;
}

const DefaultLink = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => <a {...props} />;

const UikitContext: Context<Uikit> = createContext(new Uikit('/', DefaultLink));
const UikitProvider = UikitContext.Provider;

interface Props {
  children: React.ReactElement<any>;
}

const Provider: React.FunctionComponent<Props> = props => (
  <UikitProvider value={new Uikit('/', DefaultLink)}>
    {props.children}
  </UikitProvider>
);

export default Provider;

// @flow
import React from 'react';
import createContext, {type Context} from 'create-react-context';
import uikitAssets from '../../dist/public/manifest.json';

export class Uikit {
  publicPath: string;
  assetsMap: Map<string, string>;
  Link: React$ComponentType<any>;
  constructor(publicPath: string, LinkComponent: React$ComponentType<any>) {
    this.publicPath = publicPath;
    this.Link = LinkComponent;
    this.assetsMap = new Map(
      Object.keys(uikitAssets).map(asset => [asset, uikitAssets[asset]])
    );
  }
  getUrl = (assetPath: string): string =>
    `${this.publicPath}${this.assetsMap.get(assetPath) || 'notfound'}`;
}

const DefaultLink = props => <a {...props} />;

const UikitContext: Context<Uikit> = createContext(new Uikit('/', DefaultLink));

export const UikitProvider = UikitContext.Provider;
export const UikitConsumer = UikitContext.Consumer;

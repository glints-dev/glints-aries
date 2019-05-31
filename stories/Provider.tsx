import * as React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import Uikit, { UikitProvider } from '../src';

interface Props {
  children: React.ReactElement<any>,
};

const Provider: React.FunctionComponent<Props> = (props) => (
  <HashRouter>
    <UikitProvider value={new Uikit('/', Link)}>
      {props.children}
    </UikitProvider>
  </HashRouter>
);

export default Provider;

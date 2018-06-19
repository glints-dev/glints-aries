// @flow

import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
import Uikit, {UikitProvider} from '../src';

type Props = {
  children: React$Element<any>,
};

const Provider = (props: Props) => (
  <HashRouter>
    <UikitProvider value={new Uikit('/', Link)}>{props.children}</UikitProvider>
  </HashRouter>
);

export default Provider;

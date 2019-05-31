import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Loading from '../../src/General/Loading';

const LoadingStory = () => (
  <StorybookComponent
    title="Loading"
    code="import { Loading } from 'glints-aries'"
    usage={'<Loading />'}
  >
    <Loading />
  </StorybookComponent>
);

export default LoadingStory;

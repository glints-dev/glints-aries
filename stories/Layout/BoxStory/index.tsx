import * as React from 'react';

import BoxLayoutStory from './BoxLayoutStory';
import BoxSpaceStory from './BoxSpaceStory';
import Divider from '../../../src/General/Divider';

const BoxStories = () => (
  <>
    <BoxSpaceStory />
    <Divider theme="grey" />
    <BoxLayoutStory />
  </>
);

export default BoxStories;

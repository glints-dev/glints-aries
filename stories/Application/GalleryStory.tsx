import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Gallery from '../../src/Application/Gallery';

const GalleryStory = () => (
  <StorybookComponent
    title="Gallery"
    code="import { Gallery } from 'glints-aries'"
    usage={`<Gallery>
  <img src="..." />
  <img src="..." />
</Gallery>`}
  >
    <Gallery>
      <img src="https://images.unsplash.com/photo-1535406454182-bb1130b218c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=280770245bb891f754efb0ed459efc5a&auto=format&fit=crop&w=847&q=80" />
      <img src="https://images.unsplash.com/photo-1535383494412-9bdda0d6d9f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4bd408c21c6e1dbe9f8335917f568530&auto=format&fit=crop&w=751&q=80" />
      <img src="https://images.unsplash.com/photo-1535401991746-da3d9055713e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9fa1c73c0d29848a6e63595c588051ad&auto=format&fit=crop&w=744&q=80" />
      <img src="https://images.unsplash.com/photo-1535315518977-f008bb15930b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddceb248d6378a43843d85e76c4ef749&auto=format&fit=crop&w=934&q=80" />

      <img src="https://images.unsplash.com/photo-1535401991746-da3d9055713e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9fa1c73c0d29848a6e63595c588051ad&auto=format&fit=crop&w=744&q=80" />
      <img src="https://images.unsplash.com/photo-1535315518977-f008bb15930b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddceb248d6378a43843d85e76c4ef749&auto=format&fit=crop&w=934&q=80" />
      <img src="https://images.unsplash.com/photo-1535406454182-bb1130b218c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=280770245bb891f754efb0ed459efc5a&auto=format&fit=crop&w=847&q=80" />
      <img src="https://images.unsplash.com/photo-1535383494412-9bdda0d6d9f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4bd408c21c6e1dbe9f8335917f568530&auto=format&fit=crop&w=751&q=80" />

      <img src="https://images.unsplash.com/photo-1535315518977-f008bb15930b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddceb248d6378a43843d85e76c4ef749&auto=format&fit=crop&w=934&q=80" />
      <img src="https://images.unsplash.com/photo-1535406454182-bb1130b218c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=280770245bb891f754efb0ed459efc5a&auto=format&fit=crop&w=847&q=80" />
      <img src="https://images.unsplash.com/photo-1535383494412-9bdda0d6d9f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4bd408c21c6e1dbe9f8335917f568530&auto=format&fit=crop&w=751&q=80" />
    </Gallery>
  </StorybookComponent>
);

export default GalleryStory;

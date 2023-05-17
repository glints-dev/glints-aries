import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Carousel, CarouselProps } from './Carousel';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';

(Carousel as React.FunctionComponent<CarouselProps>).displayName = 'Carousel';

export default {
  title: '@next/Carousel',
  component: Carousel,
  decorators: [withGlintsPortalContainer],
} as Meta;

const Template: Story<CarouselProps> = args => {
  const images = [
    'https://images.unsplash.com/photo-1639558360219-544c1ea2a4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/flagged/photo-1621757458931-a1b076e5a8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1639558360219-544c1ea2a4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/flagged/photo-1621757458931-a1b076e5a8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
  ];
  return (
    <Carousel {...args}>
      {images.map((imageSrc: string, i: number) => (
        <a key={i} href="https://glints.com">
          <img key={`image-${i}`} src={imageSrc} style={{ width: '800px' }} />
        </a>
      ))}
    </Carousel>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  aspectRatio: { width: 16, height: 9 },
  width: '800px',
  autoRotate: true,
};

Interactive.parameters = {
  docs: {
    source: {
      code: `
      const images = [
        'https://images.unsplash.com/photo-1639558360219-544c1ea2a4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/flagged/photo-1621757458931-a1b076e5a8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1639558360219-544c1ea2a4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/flagged/photo-1621757458931-a1b076e5a8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
      ];
      return (
        <Carousel {...args}>
          {images.map((imageSrc: string, i: number) => (
            <a key={i} href="https://glints.com/sg">
              <img
                key={\`image-\${i}\`}
                src={imageSrc}
              />
            </a>
          ))}
        </Carousel>
      );
    `,
    },
    language: 'javascript',
    type: 'auto',
  },
};

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
    'https://images.unsplash.com/photo-1643629799236-17039c865418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    'https://images.unsplash.com/photo-1632884333982-e3b4f9fddd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
  ];
  return (
    <Carousel {...args}>
      {images.map((imageSrc: string, i: number) => (
        <a key={i} href="https://glints.com" style={{ flex: '1 0 100%' }}>
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

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Banner, BannerProps } from './Banner';
import { Button } from '../Button';
import { PlainButton } from '../Button/PlainButtonStyle';
import { Neutral } from '../utilities/colors';

(Banner as React.FunctionComponent<BannerProps>).displayName = 'Banner';

const defaultText = 'Content of banner';

export default {
  title: '@next/Banner',
  component: Banner,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<BannerProps> = args => {
  return <Banner {...args}>{defaultText}</Banner>;
};

export const Interactive = Template.bind({});
Interactive.args = { title: 'Title' };

const WithButtonsTemplate: Story<
  BannerProps & { buttonDisabled: boolean; buttonLoading: boolean }
> = args => {
  const action = (
    <Button disabled={args.buttonDisabled} loading={args.buttonLoading}>
      Action
    </Button>
  );
  return (
    <Banner action={action} {...args}>
      {defaultText}
    </Banner>
  );
};

export const WithButtons = WithButtonsTemplate.bind({});
WithButtons.args = {
  buttonDisabled: false,
  title: 'Title',
  buttonLoading: false,
};

const FixedBannerTemplate: Story<BannerProps> = args => {
  const action1 = <Button>Label</Button>;
  const action2 = (
    <PlainButton
      style={{ color: Neutral.B18, marginLeft: '-16px', padding: '0' }}
    >
      Label
    </PlainButton>
  );

  return (
    <>
      <Banner
        status="critical"
        type="fixed"
        action={action1}
        secondaryAction={action2}
        {...args}
      >
        {defaultText}
      </Banner>
      Etiam vel mauris vehicula, bibendum elit id, rutrum sapien. Fusce
      efficitur dolor vel lorem gravida lacinia. Donec at malesuada diam. Nullam
      fermentum arcu at ligula ultricies sagittis. Sed erat dui, tempus in
      luctus ac, venenatis et enim. Cras sed sollicitudin sem. Etiam id quam
      vitae nisl lacinia sollicitudin vitae suscipit massa. Nullam quis viverra
      nisl. Integer tempus hendrerit elementum. Maecenas pharetra risus metus.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras dictum
      purus eu ornare pulvinar. Ut lobortis, risus et mattis bibendum, ligula
      lectus efficitur erat, id auctor felis nibh et nibh. In ligula velit,
      ornare a tempor ut, dignissim a ligula. Etiam nec ullamcorper massa, vitae
      mollis est. Suspendisse in diam leo. Nullam non tellus viverra, fermentum
      lectus vel, mattis felis. Fusce et dui lectus. Nulla vehicula, nisi
      fringilla tempor efficitur, metus urna condimentum enim, id porta orci
      eros nec quam. Mauris vulputate est vitae massa pulvinar, id laoreet
      turpis tempor. Nam vel libero lorem. Pellentesque fringilla tellus mattis
      leo mollis rhoncus. Cras eget vestibulum neque, eu fringilla nulla.
      Vestibulum ultrices nibh elit, ac ullamcorper augue tincidunt et. Etiam
      ultricies hendrerit risus a lobortis. Sed tortor massa, accumsan ac dolor
      in, congue rhoncus sem. Sed at porta lacus. Vestibulum eu gravida erat, a
      scelerisque odio. Nunc scelerisque ante sed mattis finibus. Integer ac
      bibendum sapien. Aenean nec erat a tellus suscipit eleifend. Nullam in
      orci rhoncus augue dapibus dictum non malesuada lorem. Duis sit amet ex
      feugiat, sagittis libero eu, rutrum dui. Fusce mauris turpis, sollicitudin
      facilisis malesuada auctor, placerat nec orci. Sed in libero est. Maecenas
      imperdiet erat et tempus porttitor. Aenean nec tristique elit, et
      tincidunt odio. Ut augue nisi, ullamcorper vitae auctor quis, interdum
      eget mi. Vestibulum vel ultrices nisl. Nunc rhoncus ante non arcu
      facilisis, in efficitur arcu aliquet. In accumsan lobortis dictum.
      Phasellus dictum vel lorem vel finibus. Suspendisse mattis sed metus non
      congue. Praesent blandit nunc ex, eget accumsan orci malesuada et. Proin
      in eros nibh. Duis iaculis elementum venenatis. Duis feugiat imperdiet
      nibh, in sagittis sapien finibus ac. Aenean efficitur ipsum vel lorem
      iaculis vehicula. Morbi blandit libero ut felis faucibus vulputate. In hac
      habitasse platea dictumst. In varius varius auctor. Integer urna augue,
      hendrerit eu lectus non, luctus porta nulla. Aliquam eu ipsum id mi
      condimentum volutpat ut non dui. Fusce eu ligula enim. Donec eget massa
      dui. Donec pellentesque massa leo, a rhoncus ex feugiat quis. Etiam
      fermentum massa ac nulla congue tincidunt. Aliquam vulputate ornare porta.
      Curabitur tincidunt ac tellus eget consequat. Vestibulum venenatis
      ullamcorper eros nec commodo. Donec tempus cursus nulla, at euismod risus
      sodales vel. In venenatis, ligula at cursus lacinia, elit quam varius
      neque, at malesuada tellus orci sit amet diam. Maecenas vel quam volutpat,
      viverra velit at, elementum ligula. Aliquam feugiat elit at neque iaculis,
      a ullamcorper eros viverra. Maecenas quis efficitur tellus, eget vulputate
      velit. In hac habitasse platea dictumst. Duis eros tortor, elementum ut
      tristique at, sollicitudin semper nunc. Integer laoreet, elit at elementum
      fringilla, augue metus sollicitudin est, nec sagittis tellus sem vitae
      quam. Quisque sem lacus, gravida sed feugiat ut, pretium ac ipsum. Aliquam
      sollicitudin eget dolor at interdum. In pretium, erat nec placerat
      elementum, nulla massa euismod mi, in vestibulum risus magna in magna.
      Phasellus sollicitudin facilisis mauris, non vulputate eros. Nullam
      elementum consequat libero, vitae molestie tellus tincidunt a. Ut finibus
      iaculis ex eu dapibus. Cras viverra id elit quis vulputate. Duis arcu
      ante, condimentum vitae dui in, egestas tempor augue. Phasellus tincidunt
      faucibus nunc nec efficitur. In molestie sem sem, vitae sagittis ex
      eleifend non. Donec bibendum ante orci, ut dictum ligula faucibus ac.
      Suspendisse tempus, purus vulputate feugiat imperdiet, est eros consequat
      sapien, vel scelerisque leo metus ullamcorper arcu. Donec nec elit
      scelerisque, facilisis lorem vel, pretium sapien. Nam tristique orci in
      diam vulputate, dignissim mollis nisl pretium. In rutrum dapibus tortor
      vel pulvinar. In mollis varius nulla, a semper quam egestas ut. Nam vel
      massa ac lectus sagittis consectetur. Phasellus finibus, mi sed vulputate
      tristique, nisl neque vestibulum orci, nec faucibus lacus orci ut lacus.
      Nullam sed interdum turpis, eu interdum nisl. Maecenas finibus felis eu
      purus mollis, quis scelerisque magna fringilla. Aliquam dictum congue
      nulla non euismod.
    </>
  );
};
export const FixedBanner = FixedBannerTemplate.bind({});

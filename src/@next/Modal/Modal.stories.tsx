import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Meta, Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';

import { Button, PrimaryButton } from '../Button';
import { Spinner } from '../Spinner/Spinner';
import { Typography } from '../Typography';
import { Blue } from '../utilities/colors';
import { space16 } from '../utilities/spacing';
import { Modal, ModalProps } from './Modal';
import { NumberInput } from '../NumberInput';
import { Tooltip } from '../Tooltip';

(Modal as React.FunctionComponent<ModalProps>).displayName = 'Modal';

export default {
  title: '@next/Modal',
  component: Modal,
  decorators: [withGlintsPortalContainer],
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: {
        ...MINIMAL_VIEWPORTS,
        smallHeightDesktop: {
          name: 'Small Height Desktop',
          styles: {
            width: '1024px',
            height: '400px',
          },
        },
      },
    },
  },
} as Meta;

const Template: Story<ModalProps> = args => {
  const [showModal, setShowModal] = useState(false);
  const triggerModal = () => {
    setShowModal(true);
  };

  const primaryAction = {
    label: 'Yes',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'No',
    action: () => console.log('Secondary action!'),
  };

  return (
    <>
      <Button onClick={() => triggerModal()}>Show Modal</Button>
      <Modal
        {...args}
        isOpen={showModal}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {
  header: 'Title',
  headerDescription: 'Description',
  children: 'Content',
  showBackButton: true,
  showCloseButton: true,
};

const WithLargeContentTemplate: Story<void> = () => {
  const [iOpen, setOpen] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => setOpen(true), 0);

    return () => clearTimeout(timeId);
  }, []);

  const primaryAction = {
    label: 'Yes',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'No',
    action: () => console.log('Secondary action!'),
  };
  return (
    <Modal
      isOpen={iOpen}
      header="Desiderata"
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
    >
      Go placidly amid the noise and the haste, and remember what peace there
      may be in silence. As far as possible, without surrender, be on good terms
      with all persons. Speak your truth quietly and clearly; and listen to
      others, even to the dull and the ignorant; they too have their story.
      Avoid loud and aggressive persons; they are vexatious to the spirit. If
      you compare yourself with others, you may become vain or bitter, for
      always there will be greater and lesser persons than yourself. Enjoy your
      achievements as well as your plans. Keep interested in your own career,
      however humble; it is a real possession in the changing fortunes of time.
      Exercise caution in your business affairs, for the world is full of
      trickery. But let this not blind you to what virtue there is; many persons
      strive for high ideals, and everywhere life is full of heroism. Be
      yourself. Especially do not feign affection. Neither be cynical about
      love; for in the face of all aridity and disenchantment, it is as
      perennial as the grass. Take kindly the counsel of the years, gracefully
      surrendering the things of youth. Nurture strength of spirit to shield you
      in sudden misfortune. But do not distress yourself with dark imaginings.
      Many fears are born of fatigue and loneliness. Beyond a wholesome
      discipline, be gentle with yourself. You are a child of the universe no
      less than the trees and the stars; you have a right to be here. And
      whether or not it is clear to you, no doubt the universe is unfolding as
      it should. Therefore be at peace with God, whatever you conceive Him to
      be. And whatever your labors and aspirations, in the noisy confusion of
      life, keep peace in your soul. With all its sham, drudgery and broken
      dreams, it is still a beautiful world. Be cheerful. Strive to be happy.
    </Modal>
  );
};

export const WithLargeContent = WithLargeContentTemplate.bind({});
WithLargeContent.args = {};

const WithOverlflowContentTemplate: Story<void> = () => {
  const [iOpen, setOpen] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => setOpen(true), 0);

    return () => clearTimeout(timeId);
  }, []);

  const customActions = <PrimaryButton fullWidth>Custom Action</PrimaryButton>;

  return (
    <Modal
      isOpen={iOpen}
      header="Overflowing content"
      customActions={customActions}
    >
      Please Use smaller viewport to test overflow. Choose smallHeightDesktop in
      the viewport dropdown.
      <br />
      <br />
      Go placidly amid the noise and the haste, and remember what peace there
      may be in silence. As far as possible, without surrender, be on good terms
      with all persons. Speak your truth quietly and clearly; and listen to
      others, even to the dull and the ignorant; they too have their story.
      Avoid loud and aggressive persons; they are vexatious to the spirit. If
      you compare yourself with others, you may become vain or bitter, for
      always there will be greater and lesser persons than yourself. Enjoy your
      achievements as well as your plans. Keep interested in your own career,
      however humble; it is a real possession in the changing fortunes of time.
      Exercise caution in your business affairs, for the world is full of
      trickery. But let this not blind you to what virtue there is; many persons
      strive for high ideals, and everywhere life is full of heroism. Be
      yourself. Especially do not feign affection. Neither be cynical about
      love; for in the face of all aridity and disenchantment, it is as
      perennial as the grass. Take kindly the counsel of the years, gracefully
      surrendering the things of youth. Nurture strength of spirit to shield you
      in sudden misfortune. But do not distress yourself with dark imaginings.
      Many fears are born of fatigue and loneliness. Beyond a wholesome
      discipline, be gentle with yourself. You are a child of the universe no
      less than the trees and the stars; you have a right to be here. And
      whether or not it is clear to you, no doubt the universe is unfolding as
      it should. Therefore be at peace with God, whatever you conceive Him to
      be. And whatever your labors and aspirations, in the noisy confusion of
      life, keep peace in your soul. With all its sham, drudgery and broken
      dreams, it is still a beautiful world. Be cheerful. Strive to be happy.
    </Modal>
  );
};

export const WithOverflowContent = WithOverlflowContentTemplate.bind({});
WithOverflowContent.args = {};
WithOverflowContent.parameters = {
  viewport: {
    defaultViewport: 'smallHeightDesktop',
  },
};

const WithLockedScrollableBackdropTemplate: Story<ModalProps> = args => {
  const [showModal, setShowModal] = useState(false);
  const triggerModal = () => {
    setShowModal(true);
  };

  const primaryAction = {
    label: 'Yes',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'No',
    action: () => console.log('Secondary action!'),
  };

  return (
    <>
      <Modal
        {...args}
        isOpen={showModal}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        onClose={() => setShowModal(false)}
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis
      suscipit magna, non faucibus ante consequat eget. Sed sit amet dignissim
      augue. Curabitur accumsan turpis consectetur congue tincidunt. Quisque
      dictum pellentesque dolor, a ullamcorper velit malesuada sed. Donec
      pulvinar at erat non finibus. Donec posuere dui sapien, at dignissim quam
      venenatis vitae. In nec euismod justo, eu pretium nisi. Ut aliquet eu
      risus in volutpat. Integer sed dictum enim. Etiam id ligula gravida,
      pharetra lectus id, vulputate erat. Nulla sit amet felis efficitur,
      commodo urna ut, mattis lacus. Mauris vitae massa sit amet tellus aliquet
      suscipit in ac orci. Aenean at lorem a nunc convallis dapibus. Nulla ut
      iaculis nulla. Quisque bibendum diam feugiat tincidunt efficitur. Vivamus
      pharetra nisl ac dolor tristique faucibus. Donec id tellus sit amet libero
      faucibus viverra a sit amet ipsum. Praesent congue mauris suscipit eros
      pellentesque, porttitor faucibus sem sagittis. Mauris quis porta eros. Ut
      sit amet erat sit amet nunc pharetra interdum. Pellentesque orci velit,
      condimentum et sollicitudin mollis, rhoncus eu arcu. Cras porttitor
      convallis lorem, suscipit convallis mauris sollicitudin et. Cras sit amet
      rutrum sapien. Maecenas nec consequat lacus. Duis nisl elit, posuere ac
      leo eget, mollis congue lectus. Aliquam lacinia tellus vel ornare dictum.
      Etiam pellentesque, arcu eu porttitor lacinia, quam neque vestibulum orci,
      at tristique ante tortor nec magna. Curabitur nisi dui, egestas sed ligula
      a, ornare fringilla neque. Aliquam erat volutpat. Vivamus pulvinar pretium
      purus et convallis. Aliquam vestibulum tellus placerat sapien porta
      scelerisque. Vestibulum vitae finibus purus, finibus cursus eros. Sed
      consequat a ipsum in pharetra. Pellentesque est sem, faucibus sed sem at,
      congue interdum purus. Vestibulum leo ligula, mollis in massa vulputate,
      vehicula semper justo. Aenean ut dapibus ligula. Vivamus congue eget
      tellus sed dignissim. Ut ornare et leo nec eleifend. Integer bibendum mi
      eu nunc lobortis, eget ornare neque cursus. Vivamus ullamcorper ultrices
      interdum. Ut vitae sapien molestie, fermentum lectus rutrum, fringilla
      leo. In aliquet congue nisl, at feugiat risus mollis in. Curabitur
      accumsan ipsum lorem, fermentum molestie tortor euismod ac. Fusce id ipsum
      mollis arcu hendrerit eleifend nec eu ligula. Sed bibendum finibus
      aliquam. Suspendisse vel tempus massa. Phasellus malesuada nisi vel arcu
      sodales, eu rhoncus tortor semper. Sed tempus elementum porta. Suspendisse
      leo lacus, porta ac tempus vitae, consectetur quis dui. In euismod ornare
      tempus. Sed hendrerit porta vulputate. Maecenas sit amet eleifend lacus.
      Nunc commodo velit elit, vitae commodo mi porttitor vel. Etiam ut mauris
      sit amet lacus aliquet rhoncus. Phasellus eu libero libero. Quisque congue
      laoreet aliquam. Sed nunc libero, porta a augue eu, porttitor hendrerit
      sapien. Pellentesque vel venenatis ligula, vitae porta lectus. Maecenas
      cursus eget lorem vitae tincidunt. Mauris dolor nisl, lacinia sed magna a,
      malesuada tincidunt lorem. Integer iaculis condimentum elementum. Quisque
      accumsan justo ut purus semper vehicula. Morbi iaculis maximus augue eu
      ullamcorper. Suspendisse pretium sem id odio posuere, et congue neque
      pellentesque. Proin aliquam lectus id massa dignissim, at porttitor ipsum
      sollicitudin. Donec lobortis ut ligula in convallis. Phasellus at lorem
      leo. Aenean finibus arcu a lectus elementum aliquam. Suspendisse vel
      pellentesque elit, sit amet tristique ex. Pellentesque tristique
      scelerisque purus, id porttitor libero venenatis in. Ut nulla sapien,
      pellentesque condimentum auctor sed, aliquam eget ante. Morbi vitae luctus
      nunc. Aliquam accumsan massa ac urna vehicula, non volutpat lorem finibus.
      Donec sollicitudin lectus in risus suscipit iaculis. Mauris fermentum
      tempor metus non venenatis. Duis sed ultrices leo. Vestibulum tincidunt
      accumsan odio, a mattis arcu iaculis nec. Nulla maximus arcu commodo
      mattis pretium. Etiam a massa at purus vehicula sodales. Etiam ligula mi,
      euismod id orci ac, lobortis auctor augue. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Quisque nisl
      diam, egestas ut tellus id, efficitur venenatis velit. Praesent malesuada,
      velit ut lobortis aliquam, felis eros posuere nunc, ac hendrerit lacus
      quam quis ante. Donec ultricies est tellus, et luctus tortor euismod in.
      Fusce feugiat consectetur dui eget rhoncus. Integer ullamcorper est a
      finibus tincidunt. Ut pretium tristique diam, sed ullamcorper magna
      placerat in. Sed porttitor tellus nunc, in aliquet velit viverra sit amet.
      Nunc turpis magna, sodales ultricies sapien sit amet, sodales accumsan
      enim. Donec imperdiet posuere facilisis. Morbi id imperdiet odio, quis
      vehicula purus. Donec posuere consequat nulla at tempus. Nullam feugiat
      nulla sit amet nunc vehicula commodo. Proin in suscipit augue. Cras
      convallis est nec auctor mattis. Integer et orci nec elit auctor varius.
      Morbi a sapien urna. Praesent vitae vehicula ipsum. Nunc eu egestas justo.
      Phasellus vehicula aliquam sem, ut luctus elit laoreet ac. Mauris rhoncus
      posuere sagittis. Suspendisse sagittis, sapien vel finibus pharetra, purus
      quam efficitur libero, ut auctor lorem orci a felis. Cras faucibus lorem
      et velit maximus varius. Phasellus sed varius turpis. Vivamus ex ex,
      blandit ut bibendum in, lobortis vitae ipsum. Maecenas et nibh et arcu
      fringilla fermentum nec sed lectus. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Phasellus quam nibh,
      ultricies et tellus in, mattis blandit ante. Etiam nec justo non lectus
      sollicitudin aliquet. Ut ac lacinia quam. Morbi vel ligula congue,
      malesuada nulla a, ultrices enim. Maecenas fermentum enim diam. Maecenas
      bibendum nunc vel placerat ullamcorper. Quisque quis ultrices lectus, eget
      tempor massa. Praesent vestibulum, est nec condimentum dictum, lacus
      ligula semper sem, eu aliquet sapien sem et enim. Nullam nec iaculis sem,
      sit amet mattis lectus. Aenean pretium dapibus ipsum, vitae aliquam augue
      eleifend vitae. Suspendisse potenti. Ut ut mi eu elit tempor iaculis. Duis
      faucibus placerat lorem, vitae rutrum tellus rhoncus vitae. Maecenas
      convallis felis eget malesuada congue. In tempus sed nulla at scelerisque.
      Duis sollicitudin arcu ac nisi suscipit, vel semper nisi pretium.
      Suspendisse fringilla, enim vel suscipit egestas, neque libero pharetra
      sapien, sed viverra nibh lorem in dolor. Praesent convallis eu ante
      posuere tincidunt. Aenean suscipit eu magna sit amet commodo. Ut iaculis
      tortor vel fringilla molestie. Nunc ex erat, mattis sit amet sapien
      tristique, pellentesque egestas urna. Praesent sit amet dolor mauris.
      <div style={{ margin: space16 }}>
        <Button onClick={() => triggerModal()}>Show Modal</Button>
      </div>
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

export const WithLockedScrollableBackdrop =
  WithLockedScrollableBackdropTemplate.bind({});

WithLockedScrollableBackdrop.args = {
  header: 'Title',
  headerDescription: 'Description',
  children: 'Content',
  showBackButton: true,
  showCloseButton: true,
};

const WithSpinnerTemplate: Story<void> = () => {
  const [iOpen, setOpen] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => setOpen(true), 0);

    return () => clearTimeout(timeId);
  }, []);
  return (
    <Modal isOpen={iOpen}>
      <div
        style={{
          width: '100vw',
          padding: '20px 0',
        }}
      >
        <Spinner fill={Blue.S99} height="36px" width="36px" />
        <div
          style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
        >
          <Typography as="div" variant="subtitle1">
            Redirecting to payment...
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography as="div" variant="body1">
            If you haven’t been redirected, please click <a href="#">here</a>
          </Typography>
        </div>
      </div>
    </Modal>
  );
};

export const WithSpinner = WithSpinnerTemplate.bind({});
WithSpinner.args = {};

const WithCustomActionsTemplate: Story<void> = () => {
  const [showModal, setShowModal] = useState(false);
  const triggerAlert = () => {
    setShowModal(true);
  };

  const customActions = <PrimaryButton fullWidth> Custom Action</PrimaryButton>;
  const primaryAction = {
    label: 'Primary Action',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'Secondary Action',
    action: () => console.log('Secondary action!'),
  };

  return (
    <>
      <Button onClick={() => triggerAlert()}>Show Modal</Button>
      <Modal
        isOpen={showModal}
        header="Title"
        onClose={() => setShowModal(false)}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        customActions={customActions}
      >
        Content
      </Modal>
    </>
  );
};

export const WithCustomActions = WithCustomActionsTemplate.bind({});
WithCustomActions.args = {};

const WithNumberInputAndTooltipTemplate: Story<void> = () => {
  const [showModal, setShowModal] = useState(false);
  const triggerAlert = () => {
    setShowModal(true);
  };

  const customActions = <PrimaryButton fullWidth> Custom Action</PrimaryButton>;
  const primaryAction = {
    label: 'Primary Action',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'Secondary Action',
    action: () => console.log('Secondary action!'),
  };

  return (
    <>
      <Button onClick={() => triggerAlert()}>Show Modal</Button>
      <Modal
        isOpen={showModal}
        header="Title"
        onClose={() => setShowModal(false)}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        customActions={customActions}
      >
        <Tooltip
          zIndex={10000}
          content={<Typography variant="body1"> Sample content</Typography>}
        >
          <NumberInput
            placeholder="enter test content"
            suffix={<div>posts</div>}
          />
        </Tooltip>
      </Modal>
    </>
  );
};

export const WithNumberInputAndTooltip = WithNumberInputAndTooltipTemplate.bind(
  {}
);
WithNumberInputAndTooltip.args = {};

const WithCustomLeftAndRightComponentTemplate: Story<void> = () => {
  const [showModal, setShowModal] = useState(false);
  const triggerAlert = () => {
    setShowModal(true);
  };

  const customActions = <PrimaryButton fullWidth> Custom Action</PrimaryButton>;

  const primaryAction = {
    label: 'Primary Action',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'Secondary Action',
    action: () => console.log('Secondary action!'),
  };

  return (
    <>
      <Button onClick={() => triggerAlert()}>Show Modal</Button>
      <Modal
        isOpen={showModal}
        header="Title"
        onClose={() => setShowModal(false)}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        customActions={customActions}
        leftComponent={<Button>Prev</Button>}
        rightComponent={<Button>Next</Button>}
      >
        Content
      </Modal>
    </>
  );
};

export const WithCustomLeftAndRightComponent =
  WithCustomLeftAndRightComponentTemplate.bind({});

WithCustomLeftAndRightComponent.args = {};

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Button } from '../Button';
import { ComponentAction } from '../../types/componentAction';
import { SideSheet } from './SideSheet';
import { SideSheetProps } from './SideSheet';
import { space16 } from '../utilities/spacing';
import { TabModel } from '../Tabs';
import { Tabs } from '../Tabs';
import { Typography } from '../Typography';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';

export default {
  title: '@next/SideSheet',
  component: SideSheet,
  decorators: [
    Story => <BaseContainer>{Story()}</BaseContainer>,
    withGlintsPortalContainer,
  ],
} as Meta;

const Template: Story<SideSheetProps> = args => {
  const [showSideSheet, setShowSideSheet] = useState<boolean>(false);

  const basicButtonAction: ComponentAction = {
    label: 'Cancel',
    action: () => console.log('cancel action'),
  };
  const primaryButtonAction: ComponentAction = {
    label: 'Save',
    action: () => console.log('save action'),
  };

  return (
    <>
      <Button onClick={() => setShowSideSheet(true)}>Show Side Sheet</Button>
      <SideSheet
        {...args}
        isOpen={showSideSheet}
        title="Sample Title"
        description="Sample Description"
        onBack={() => console.log('back button clicked')}
        onClose={() => setShowSideSheet(false)}
        basicButtonAction={basicButtonAction}
        primaryButtonAction={primaryButtonAction}
      >
        <Typography as="div" variant="body1" style={{ margin: space16 }}>
          Side Sheet Content here...
        </Typography>
      </SideSheet>
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.parameters = {
  docs: {
    source: {
      code: `
      return (
        <>
          <Button onClick={() => setShowSideSheet(true)}>Show Side Sheet</Button>
          <SideSheet
            {...args}
            isOpen={showSideSheet}
            title="Sample Title"
            description="Sample Description"
            onBack={() => console.log('back button clicked')}
            onClose={() => setShowSideSheet(false)}
            basicButtonAction={basicButtonAction}
            primaryButtonAction={primaryButtonAction}
          >
            <Typography as="div" variant="body1" style={{ margin: space16 }}>
              Side Sheet Content here...
            </Typography>
          </SideSheet>
        </>
      );
    `,
    },
    language: 'javascript',
    type: 'auto',
  },
};

const WithTabsTemplate: Story<SideSheetProps> = args => {
  const [showSideSheet, setShowSideSheet] = useState<boolean>(false);

  const basicButtonAction: ComponentAction = {
    label: 'Cancel',
    action: () => console.log('cancel action'),
  };
  const primaryButtonAction: ComponentAction = {
    label: 'Save',
    action: () => console.log('save action'),
  };

  const [selected, setSelected] = useState(0);
  const tabs: TabModel[] = [
    { id: 'id-tab-1', content: 'All' },
    { id: 'id-tab-2', content: 'Accepts marketing' },
    { id: 'id-tab-3', content: 'Repeat customers' },
  ];

  const tabContents = [
    <Typography as="div" key={0} style={{ padding: space16 }}>
      tab 1 contents
    </Typography>,
    <Typography as="div" key={0} style={{ padding: space16 }}>
      tab 2 contents
    </Typography>,
    <Typography as="div" key={2} style={{ padding: space16 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quod unde
      quia minus, obcaecati dolorum iusto odit, asperiores aliquam nobis ipsam
      adipisci molestias, beatae facere ut assumenda commodi animi eos.
    </Typography>,
  ];

  return (
    <>
      <Button onClick={() => setShowSideSheet(true)}>Show Side Sheet</Button>
      <SideSheet
        {...args}
        isOpen={showSideSheet}
        title="Edit template message"
        onClose={() => setShowSideSheet(false)}
        showBackButton={false}
        basicButtonAction={basicButtonAction}
        primaryButtonAction={primaryButtonAction}
        showHorizontalLine={false}
      >
        <Typography as="div" variant="body1" style={{ paddingRight: space16 }}>
          <Tabs
            tabs={tabs}
            selected={selected}
            onSelected={i => setSelected(i)}
            fitted={true}
          >
            {tabContents[selected]}
          </Tabs>
        </Typography>
      </SideSheet>
    </>
  );
};

export const WithTabsInteractive = WithTabsTemplate.bind({});

WithTabsInteractive.parameters = {
  docs: {
    source: {
      code: `
      const [showSideSheet, setShowSideSheet] = useState<boolean>(false);

      const basicButtonAction: ComponentAction = {
        label: 'Cancel',
        action: () => console.log('cancel action'),
      };
      const primaryButtonAction: ComponentAction = {
        label: 'Save',
        action: () => console.log('save action'),
      };
    
      const [selected, setSelected] = useState(0);
      const tabs: TabModel[] = [
        { id: 'id-tab-1', content: 'All' },
        { id: 'id-tab-2', content: 'Accepts marketing' },
        { id: 'id-tab-3', content: 'Repeat customers' },
      ];
    
      const tabContents = [
        <Typography as="div" key={0} style={{ padding: space16 }}>
          tab 1 contents
        </Typography>,
        <Typography as="div" key={0} style={{ padding: space16 }}>
          tab 2 contents
        </Typography>,
        <Typography as="div" key={2} style={{ padding: space16 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quod unde
          quia minus, obcaecati dolorum iusto odit, asperiores aliquam nobis ipsam
          adipisci molestias, beatae facere ut assumenda commodi animi eos.
        </Typography>,
      ];
    
      return (
        <>
          <Button onClick={() => setShowSideSheet(true)}>Show Side Sheet</Button>
          <SideSheet
            {...args}
            isOpen={showSideSheet}
            title="Edit template message"
            onClose={() => setShowSideSheet(false)}
            showBackButton={false}
            basicButtonAction={basicButtonAction}
            primaryButtonAction={primaryButtonAction}
            showHorizontalLine={false}
          >
            <Typography as="div" variant="body1" style={{ paddingRight: space16 }}>
              <Tabs
                tabs={tabs}
                selected={selected}
                onSelected={i => setSelected(i)}
                fitted={true}
              >
                {tabContents[selected]}
              </Tabs>
            </Typography>
          </SideSheet>
        </>
      );
    `,
    },
    language: 'javascript',
    type: 'auto',
  },
};

const WithLockedScrollableBackdropTemplate: Story<SideSheetProps> = args => {
  const [showSideSheet, setShowSideSheet] = useState<boolean>(false);

  const basicButtonAction: ComponentAction = {
    label: 'Cancel',
    action: () => console.log('cancel action'),
  };
  const primaryButtonAction: ComponentAction = {
    label: 'Save',
    action: () => console.log('save action'),
  };

  return (
    <>
      <SideSheet
        {...args}
        isOpen={showSideSheet}
        title="Sample Title"
        description="Sample Description"
        onBack={() => console.log('back button clicked')}
        onClose={() => setShowSideSheet(false)}
        basicButtonAction={basicButtonAction}
        primaryButtonAction={primaryButtonAction}
      >
        <Typography as="div" variant="body1" style={{ margin: space16 }}>
          Side Sheet Content here...
        </Typography>
      </SideSheet>
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
      nunc.
      <div style={{ margin: space16 }}>
        <Button onClick={() => setShowSideSheet(true)}>Show Side Sheet</Button>
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
      velit.
    </>
  );
};

export const WithLockedScrollableBackdrop =
  WithLockedScrollableBackdropTemplate.bind({});

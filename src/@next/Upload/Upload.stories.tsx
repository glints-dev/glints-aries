import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Upload, UploadProps } from './Upload';

export default {
  title: '@next/Upload',
  component: Upload,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {},
} as Meta;

const Template: Story<UploadProps> = args => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <>
      <Upload {...args} file={file} setFile={setFile} />
    </>
  );
};
export const Interactive = Template.bind({});
Interactive.args = {};

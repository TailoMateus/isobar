import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RoundImage from './RoundImage'

export default {
  title: 'Components/RoundImage',
  component: RoundImage,
} as ComponentMeta<typeof RoundImage>;

export const Default: ComponentStory<typeof RoundImage> = (args) => (
  <RoundImage {...args} />
);

Default.args = {
  image: '/assets/band.png',
  size: '100px'
};

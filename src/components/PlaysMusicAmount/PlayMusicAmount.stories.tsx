import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlayMusicAmount from './PlayMusicAmount';

export default {
  title: 'Components/PlayMusicAmount',
  component: PlayMusicAmount,
} as ComponentMeta<typeof PlayMusicAmount>;

export const Default: ComponentStory<typeof PlayMusicAmount> = (args) => (
  <PlayMusicAmount {...args} />
);

Default.args = {
  plays: 456456
};

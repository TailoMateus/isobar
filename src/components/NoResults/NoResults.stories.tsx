import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NoResults from './NoResults';

export default {
  title: 'Components/NoResults',
  component: NoResults,
} as ComponentMeta<typeof NoResults>;

export const Default: ComponentStory<typeof NoResults> = (args) => (
  <NoResults {...args} />
);

Default.args = {
  image: '/assets/no_results.png'
};



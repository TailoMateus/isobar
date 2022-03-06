import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Search from './Search'

export default {
  title: 'Components/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => {
  const [search, setSearch] = useState('Beatles');
  return (
    <Search {...args} search={search} setSearch={setSearch} />
  )
};

export const Default = Template.bind({})

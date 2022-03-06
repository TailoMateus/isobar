import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'
import Logo from './Logo'

const Decorator = styled.div`
  background: #cecece;
  padding: 2rem;
`;

export default {
  title: 'Components/Logo',
  component: Logo,
  decorators: [(story) => <Decorator>{story()}</Decorator>],
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = (args) => (
  <Logo {...args} />
);

Default.args = {
  image: '/assets/logo.png'
};

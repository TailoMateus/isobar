import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'
import GoBack from './GoBack'

const Decorator = styled.div`
  background: #cecece;
  padding: 2rem;
  position: relative;
  height: 40px;
`;

export default {
  title: 'Components/GoBack',
  component: GoBack,
  decorators: [(story) => <Decorator>{story()}</Decorator>],
} as ComponentMeta<typeof GoBack>;

export const Default: ComponentStory<typeof GoBack> = () => (
  <GoBack />
);

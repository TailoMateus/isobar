import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import OrderBy from './OrderBy';

const Decorator = styled.div`
  position: relative;
  height: 160px;
`;

export default {
  title: 'Components/OrderBy',
  component: OrderBy,
  decorators: [(story) => <Decorator>{story()}</Decorator>],
} as ComponentMeta<typeof OrderBy>;

export const Default: ComponentStory<typeof OrderBy> = (args) => (
  <OrderBy {...args} />
);

const data = [{
  albums: ['5fce349568b91d001293be08'],
  biography: "The Beatles were an English rock band formed in Liverpool in 1960.",
  genre: "classic rock",
  id: "5fce349568b91d001293bdc8",
  image: "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
  name: "The Beatles",
  numPlays: 340473
}]

Default.args = {
  data,
};





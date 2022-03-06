import styled from 'styled-components'

type TImage = {
  size: string;
};

export const Image = styled.img<TImage>`
  width: ${({ size }) => size};
  border-radius: 100%;
`;

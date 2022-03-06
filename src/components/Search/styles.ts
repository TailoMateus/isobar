import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.div`
  background: #f34401;
  display: flex;
  padding: 15px 0;
  position: relative;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 35px;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
`;

export const SearchImage = styled.img`
  height: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: calc(100% - 170px);
  margin-right: 12px;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  border: none;
  padding-left: 40px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 7px;
  font-size: 20px;
  left: 5px;
  cursor: pointer;
  background: none;
  border: none;
`;

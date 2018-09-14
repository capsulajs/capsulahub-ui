import React  from 'react';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  position: fixed;
  top: 15%;
  left: calc(50% - 274px);
  background: #525252;
  color: #A9A9A9;
  padding: 19px;
  width: 548px;
  height: 361px;
  z-index: 9999;
`;
const Close = styled.div`cursor: pointer`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 10px;
`;

const Modal = ({ title, onClose, ...props }) => <Container>
  <Header>
    <div>{title}</div>
    <Close onClick={onClose}>&#10005;</Close>
  </Header>
  {props.children}
</Container>;

export { Modal };

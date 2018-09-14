import React  from 'react';
import JSONInput from 'react-json-editor-ajrm';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';
import image from '../assets/settings.png';

const colors = {
  default: '#767676',
  background: '#3F3F3F',
  background_warning: '#3F3F3F',
  string: '#DEDEDE',
  number: '#DEDEDE',
  colon: '#57D7FF',
  keys: '#57D7FF',
  keys_whiteSpace: '#57D7FF',
  primitive: '#DEDEDE'
};

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  background: #3F3F3F;
  width: 100%;
  height: 100%;
  color: #767676;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  padding-bottom: 5px;
`;

const Image = styled.img`
  padding-right: 5px;
  width: 16px;
  height: 16px;
`;

const Title = styled.div`text-transform: uppercase`;

const JsonInput = ({ id, data, width, height }) => <Container>
  <Header>
    <Image src={image}/>
    <Title>JSON Input</Title>
  </Header>
  <JSONInput id={id}
             placeholder={data}
             colors={colors}
             width={width}
             height={height}/>
</Container>;

export { JsonInput };

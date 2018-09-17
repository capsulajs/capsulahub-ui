import React  from 'react';
import AceEditor from 'react-ace';
import styled from 'styled-components';
import brace from 'brace';
import { defaultFontFamily } from '../constants';
import image from '../../assets/settings.png';
import 'brace/mode/json';
import './theme';

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
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const Image = styled.img`
  padding-right: 5px;
  width: 16px;
  height: 16px;
`;

const Title = styled.div`text-transform: uppercase`;

const JsonInput = ({ id, value, width, height, onChange }) => <Container>
  <Header>
    <Image src={image}/>
    <Title>JSON Input</Title>
  </Header>
  <AceEditor
    mode="json"
    theme="capsula-js"
    value={value}
    onChange={onChange}
    name={id}
    editorProps={{$blockScrolling: true}}
    fontSize={11}
    setOptions={{
      tabSize: 2
    }}
    width={width}
    height={height}/>
</Container>;

export { JsonInput };

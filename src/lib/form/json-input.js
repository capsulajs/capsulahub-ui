import React  from 'react';
import styled from 'styled-components';
import {
  defaultFontFamily,
  defaultFomtSize,
  defaultFontWeight
} from '../constants';
import image from '../../assets/settings.png';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import '../theme';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: ${defaultFontWeight};
  font-size: ${defaultFomtSize};
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

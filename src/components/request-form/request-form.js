import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import { Dropdown } from '..';
import { defaultFontFamily, defaultFomtSize, defaultFontWeight } from '../constants';
import image from '../../assets/settings.png';
import 'brace/mode/javascript';
import 'brace/mode/json';
import '../theme';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: ${defaultFontWeight};
  font-size: ${defaultFomtSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #3f3f3f;
  color: #767676;
  min-width: 150px;
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

const Title = styled.div`
  text-transform: uppercase;
`;

export default class RequestForm extends React.Component {
  static propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.object,
  };

  render() {
    const { width, height, value, onChange } = this.props;
    const items = [{ label: 'javascript' }, { label: 'json' }];

    return (
      <Container width={width} height={height}>
        <Header>
          <Image src={image} />
          <Title>
            JSON Input
            <Dropdown title="Input" items={items} />
          </Title>
        </Header>
        <AceEditor
          mode="json"
          theme="capsula-js"
          value={value}
          onChange={onChange}
          editorProps={{ $blockScrolling: true }}
          fontSize={11}
          setOptions={{
            tabSize: 2,
          }}
          width={width}
          height={`calc(${height} - 39px)`}
        />
      </Container>
    );
  }
}

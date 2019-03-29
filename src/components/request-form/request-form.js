import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import JSONL from 'json-literal';
import Editor from './editor';
import { Dropdown, Button } from '..';
import { defaultFontFamily, defaultFomtSize, defaultFontWeight } from '../constants';
import image from '../../assets/settings.png';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-style: ${defaultFontWeight};
  font-size: ${defaultFomtSize};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: #3f3f3f;
  color: #767676;
  min-width: 150px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Image = styled.img`
  padding-right: 5px;
  width: 16px;
  height: 16px;
`;
const Title = styled.div`
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

const javascript = 'javascript';
const argumentsCount = [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }];
const languages = [{ label: javascript }, { label: 'json' }];

export default class RequestForm extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    input: PropTypes.string,
    selectLanguage: PropTypes.func.isRequired,
    setArgument: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
  };

  state = {
    language: 'javascript',
    arguments: ['{}'],
    isValid: true,
  };

  onLoad = (editor) => (this.editor = editor);
  onChangeLanguage = ({ label }) => {
    this.setState({ language: label });
    this.editor.getSession().setMode(`ace/mode/${label}`);
    this.props.selectLanguage(label);
  };
  onChangeArgumentsCount = ({ label }) => {
    const args = this.state.arguments;
    const getRequiredArguments = (n, array = []) => [...array, ...new Array(n).fill('{}')].slice(0, n);

    switch (label) {
      case 'One':
        return this.setState({ arguments: getRequiredArguments(1, args) });
      case 'Two':
        return this.setState({ arguments: getRequiredArguments(2, args) });
      case 'Three':
        return this.setState({ arguments: getRequiredArguments(3, args) });
      default:
        return this.setState({ arguments: getRequiredArguments(1, args) });
    }
  };
  onChangeArgument = (index, newArgument) => {
    const args = [...this.state.arguments];
    args[index] = newArgument;
    this.setState({ arguments: args });
    this.props.setArgument(index, this.state.arguments);
  };
  onValid = (isValid) => this.setState({ isValid });
  onSubmit = () => {
    const { isValid, language, arguments: args } = this.state;

    if (isValid) {
      this.props.submit({
        language,
        arguments: language === javascript ? args.map(JSONL.parse).map(JSON.stringify) : args
      });
    }
  };

  render() {
    const { language, isValid, arguments: input } = this.state;
    const { width, height, path } = this.props;

    return (
      <Container width={width} height={height}>
        <Column>
          <Header>
            <Wrapper>
              <Image src={image} />
              <Title>Request Form</Title>
            </Wrapper>
            <Wrapper>
              <Dropdown title="Arguments" items={argumentsCount} width={120} onChange={this.onChangeArgumentsCount} />
              <Dropdown title="Language" items={languages} width={120} onChange={this.onChangeLanguage} />
            </Wrapper>
          </Header>
          {input.map((value, index) => (
            <Editor
              key={index}
              index={index}
              mode={language}
              value={value}
              onLoad={this.onLoad}
              onChange={this.onChangeArgument}
              onValid={this.onValid}
              width={width - 10}
              height={(height - (65 + 2 * input.length)) / input.length}
            />
          ))}
          <Footer>
            <Button text="Submit" theme={isValid ? 'active' : 'disabled'} css="padding: 3px 5px 4px 5px; width: 100px;" onClick={this.onSubmit} />
            <Title color="#f8f7f7">{path}</Title>
          </Footer>
        </Column>
      </Container>
    );
  }
}

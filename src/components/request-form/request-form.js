import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Editor from './editor';
import { Dropdown, Input, Button } from '..';
import { defaultFontFamily, defaultFomtSize, defaultFontWeight } from '../constants';
import image from '../../assets/settings.png';
import { codeModes } from '../../constants';

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
const ArgumentsCount = styled.div`
  display: flex;
  align-items: center;
`;
const ArgumentsCountLabel = styled.label`
  margin-right: 10px;
`;

const defaultArgValue = 'return {};';
const languages = [{ label: codeModes.javascript }, { label: codeModes.json }];

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
    language: codeModes.javascript,
    requestArgs: [defaultArgValue],
    argsCount: 1,
    editorsIsValid: [true],
  };

  onLoad = (editor) => (this.editor = editor);

  onChangeLanguage = ({ label }) => {
    this.setState({ language: label });
    this.editor.getSession().setMode(`ace/mode/${label}`);
    this.props.selectLanguage(label);
  };

  onChangeArgumentsCount = (argsCount) => {
    const argsCountNumber = Number(argsCount);
    this.setState((prevState) => ({
      requestArgs: [...prevState.requestArgs, ...new Array(argsCountNumber).fill(defaultArgValue)].slice(
        0,
        argsCountNumber
      ),
      argsCount,
    }));
  };

  onChangeArgument = (index, newArgument) => {
    const args = [...this.state.requestArgs];
    args[index] = newArgument;
    this.setState({ requestArgs: args });
    this.props.setArgument(index, this.state.requestArgs);
  };

  onValid = ({ isValid, index }) =>
    isValid !== this.state.editorsIsValid[index] &&
    this.setState((prevState) => {
      const newEditorsIsValid = [...prevState.editorsIsValid];
      newEditorsIsValid[index] = isValid;
      return {
        editorsIsValid: newEditorsIsValid,
      };
    });

  onSubmit = () => {
    const { language, requestArgs: args } = this.state;
    this.props.submit({
      language,
      requestArgs: args.map((arg) =>
        language === codeModes.javascript ? eval(`(function(){${arg}})()`) : JSON.parse(arg)
      ),
    });
  };

  isFormValid = () => typeof this.state.editorsIsValid.find((isValid) => !isValid) === 'undefined';

  render() {
    const { language, requestArgs, argsCount } = this.state;
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
              <ArgumentsCount>
                <ArgumentsCountLabel>Arguments:</ArgumentsCountLabel>
                <Input min="1" onChange={this.onChangeArgumentsCount} value={argsCount} type="number" width="30px" />
              </ArgumentsCount>
              <Dropdown title={codeModes.javascript} items={languages} width={120} onChange={this.onChangeLanguage} />
            </Wrapper>
          </Header>
          {requestArgs.map((value, index) => (
            <Editor
              key={index}
              index={index}
              mode={language}
              value={value}
              onLoad={this.onLoad}
              onChange={this.onChangeArgument}
              onValid={this.onValid}
              width={width - 10}
              height={(height - (65 + 2 * requestArgs.length)) / requestArgs.length}
            />
          ))}
          <Footer>
            <Button
              text="Submit"
              theme={this.isFormValid() ? 'active' : 'disabled'}
              css="padding: 3px 5px 4px 5px; width: 100px;"
              onClick={this.onSubmit}
            />
            <Title color="#f8f7f7">{path}</Title>
          </Footer>
        </Column>
      </Container>
    );
  }
}

import React, { PureComponent } from 'react';
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
  width: 100%;
  height: 100%;
  background: #3f3f3f;
  color: #767676;
  min-width: 150px;
  min-height: 100px;
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

const defaultArgVal = {
  javascript: 'return {};',
  json: '{}',
};

const height = 555;

const languages = [{ label: codeModes.javascript }, { label: codeModes.json }];

export default class RequestForm extends PureComponent {
  static propTypes = {
    selectedMethodPath: PropTypes.string.isRequired,
    content: PropTypes.shape({
      language: PropTypes.string.isRequired,
      requestArgs: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    language: this.props.content.language,
    requestArgs: [this.props.content.requestArgs],
    argsCount: 1,
    editorsIsValid: [true],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.content !== prevProps.content) {
      const { language, requestArgs } = this.props.content;
      this.setState((prevState) => ({
        language,
        requestArgs,
        argsCount: typeof requestArgs.map === 'function' ? requestArgs.length : prevState.argsCount,
      }));
    }
    if (this.state.argsCount < prevState.argsCount) {
      this.setState({
        editorsIsValid: prevState.editorsIsValid.slice(0, this.state.argsCount),
      });
    }
  }

  onChangeLanguage = ({ label: newLanguage }) => {
    if (newLanguage !== this.state.language) {
      this.setState((prevState) => ({
        language: newLanguage,
        requestArgs: prevState.requestArgs.map(() => defaultArgVal[newLanguage]),
      }));
    }
  };

  onChangeArgumentsCount = (argsCount) => {
    const argsCountNumber = Number(argsCount);
    if (argsCountNumber > 0) {
      this.setState((prevState) => ({
        argsCount: argsCountNumber,
        requestArgs: [
          ...prevState.requestArgs,
          ...new Array(argsCountNumber).fill(defaultArgVal[prevState.language]),
        ].slice(0, argsCountNumber),
      }));
    } else {
      this.setState({
        argsCount: '',
      });
    }
  };

  onChangeArgument = (index, newArgument) => {
    this.setState((prevState) => {
      const newArgs = [...prevState.requestArgs];
      newArgs[index] = newArgument;
      return { requestArgs: newArgs };
    });
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
    if (this.isFormValid()) {
      const { language, requestArgs: args } = this.state;
      this.props.onSubmit({
        language,
        requestArgs: args.map((arg) =>
          language === codeModes.javascript ? eval(`(function(){${arg}})()`) : JSON.parse(arg)
        ),
      });
    }
  };

  isFormValid = () =>
    !!this.props.selectedMethodPath &&
    this.state.requestArgs.every((content) => !!content.trim()) &&
    typeof this.state.editorsIsValid.find((isValid) => !isValid) === 'undefined';

  render() {
    const { language, requestArgs, argsCount } = this.state;
    const { selectedMethodPath } = this.props;

    return (
      <Container data-cy="request-form-container">
        <Column>
          <Header data-cy="request-form-header">
            <Wrapper>
              <Image data-cy="request-form-icon" src={image} />
              <Title data-cy="request-form-title">Request Form</Title>
            </Wrapper>
            <Wrapper>
              <ArgumentsCount data-cy="request-form-args-count">
                <ArgumentsCountLabel data-cy="request-form-args-count-label">Arguments:</ArgumentsCountLabel>
                <Input
                  data-cy="request-form-args-count-value"
                  min="1"
                  onChange={this.onChangeArgumentsCount}
                  value={argsCount}
                  type="number"
                  width="30px"
                />
              </ArgumentsCount>
              <Dropdown
                dataCy="request-form-language-dropdown"
                title={codeModes.javascript}
                items={languages}
                width={120}
                onChange={this.onChangeLanguage}
              />
            </Wrapper>
          </Header>
          {requestArgs.map((value, index) => (
            <Editor
              key={index}
              index={index}
              mode={language}
              value={value}
              onChange={this.onChangeArgument}
              onValid={this.onValid}
              height={(height - (65 + 2 * requestArgs.length)) / requestArgs.length}
            />
          ))}
          <Footer>
            <Button
              dataCy="request-form-submit-btn"
              text="Submit"
              theme={this.isFormValid() ? 'active' : 'disabled'}
              css="padding: 3px 5px 4px 5px; width: 100px;"
              onClick={this.onSubmit}
            />
            <Title data-cy="request-form-selected-method-path" color="#f8f7f7">
              {selectedMethodPath}
            </Title>
          </Footer>
        </Column>
      </Container>
    );
  }
}

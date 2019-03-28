import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import { Dropdown, Button } from '..';
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
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  padding-right: 5px;
  width: 16px;
  height: 16px;
`;
const Title = styled.div`
  text-transform: uppercase;
`;

const languages = [{ label: 'javascript' }, { label: 'json' }];

export default class RequestForm extends React.Component {
  static propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    input: PropTypes.string,
    selectLanguage: PropTypes.func.isRequired,
    setInput: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
  };

  state = {
    language: 'javascript',
    input: this.props.input || '',
  };

  onLoad = (editor) => (this.editor = editor);
  selectLanguage = ({ label }) => {
    this.setState({ language: label });
    this.editor.getSession().setMode(`ace/mode/${label}`);
  }
  onChangeContent = (input) => {
    this.setState({ input });
    this.props.setInput(input);
  };
  onSubmit = () => this.props.submit(this.state);

  render() {
    const { language, input } = this.state;
    const { width, height, value, onChange } = this.props;

    return (
      <Container width={width} height={height}>
        <Header>
          <Wrapper>
            <Image src={image} />
            <Title>Request Form</Title>
          </Wrapper>
          <Dropdown title="Language" items={languages} width={120} onChange={this.selectLanguage} />
        </Header>
        <AceEditor
          mode={language}
          theme="capsula-js"
          value={input}
          onLoad={this.onLoad}
          onChange={this.onChangeContent}
          fontSize={11}
          setOptions={{
            tabSize: 2,
          }}
          width={width}
          height={`calc(${height} - 39px)`}
        />
        <Button text="Submit" css="margin: 10px; padding: 5px; width: 100px;" onClick={this.onSubmit}/>
      </Container>
    );
  }
}

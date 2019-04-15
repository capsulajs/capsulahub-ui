import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/mode/json';
import './theme';
import { codeModes } from '../../constants';

const Line = styled.div`
  height: 1px;
  border-bottom: 1px dashed #767676;
  width: 100%;
`;

export default class Editor extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    mode: PropTypes.string.isRequired,
    onLoad: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onValid: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  onChange = (input) => this.props.onChange(this.props.index, input);

  onValid = (errors) => {
    let isValid = false;
    if (errors.filter((error) => error.type !== 'info').length === 0) {
      if (this.props.mode === codeModes.json || /.*return .+/.test(this.props.value)) {
        isValid = true;
      }
    }
    this.props.onValid(isValid);
  };

  render() {
    const { width, height, mode, onLoad, value } = this.props;

    return (
      <React.Fragment>
        <AceEditor
          mode={mode}
          theme="capsula-js"
          value={value}
          onLoad={onLoad}
          onChange={this.onChange}
          onValidate={this.onValid}
          fontSize={14}
          setOptions={{
            tabSize: 2,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
          }}
          width={`${width}px`}
          height={`${height}px`}
        />
        <Line />
      </React.Fragment>
    );
  }
}

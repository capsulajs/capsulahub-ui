import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/mode/json';
import './theme';

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
    value: PropTypes.string,
  };

  onChange = (newArgument) => {
    this.props.onChange(this.props.index, newArgument);
  };

  render() {
    const { width, height, mode, onLoad, onChange, value } = this.props;

    return (
      <React.Fragment>
        <AceEditor
          mode={mode}
          theme="capsula-js"
          value={value}
          onLoad={onLoad}
          onChange={this.onChange}
          fontSize={11}
          setOptions={{
            tabSize: 2,
          }}
          width={`${width}px`}
          height={`${height}px`}
        />
        <Line />
      </React.Fragment>
    );
  }
}

import React  from 'react';
import JSONInput from 'react-json-editor-ajrm';

const colors = {
  default: '#DEDEDE',
  background: '#3F3F3F',
  background_warning: '#3F3F3F',
  string: '#DEDEDE',
  number: '#DEDEDE',
  colon: '#57D7FF',
  keys: '#57D7FF',
  keys_whiteSpace: '#57D7FF',
  primitive: '#DEDEDE'
};

const JsonInput = ({ id, data, width, height }) => <JSONInput id={id}
             placeholder={data}
             colors={colors}
             width={width}
             height={height}/>;

export { JsonInput };

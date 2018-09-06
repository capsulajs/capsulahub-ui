import React from 'react';
import ReactJson from 'react-json-view';

const data = {
  array: [1, 2, 3],
  bool: true,
  object: {
    foo: 'bar'
  },
  immutable: { key: 'value' }
};

const shouldCollapse = (field) => {
  if (!field.name) {
    return true;
  }
  return false;
};

export const theme = {
  scheme: 'custom-theme',
  base00: '#3F3F3F',
  base01: '#DEDEDE',
  base02: '#57D7FF',
  base03: '#DEDEDE',
  base04: '#DEDEDE',
  base05: '#DEDEDE',
  base06: '#DEDEDE',
  base07: '#57D7FF',
  base08: '#DEDEDE',
  base09: '#DEDEDE',
  base0A: '#DEDEDE',
  base0B: '#DEDEDE',
  base0C: '#57D7FF',
  base0D: '#DEDEDE',
  base0E: '#DEDEDE',
  base0F: '#DEDEDE'
};

const CustomEditor = () => <ReactJson src={data}
                                      name={false}
                                      shouldCollapse={shouldCollapse}
                                      iconStyle={'circle'}
                                      theme={theme}
                                      displayDataTypes={false}
                                      displayObjectSize={false}
                                      enableClipboard={true}
                                      onDelete={true}
                                      onEdit={true}/>;
                                      
const Row = () => <div style={{display: 'flex', flexDirection: 'row'}}>
  <div style={{width: '50px'}}>2</div>
  <div style={{width: '100px'}}>15:05:06</div>
  <div style={{width: '350px'}}>
    <CustomEditor/>
  </div>
</div>;

const JSONEditor = () => <div style={{background: '#3F3F3F', width: '600px', height: '400px', color: '#767676'}}>
  <div style={{padding: '12px'}}>
    <Row/>
    <Row/>
  </div>
  <div>X</div>
</div>;

export { JSONEditor };

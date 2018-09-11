import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DefaultButton } from '../lib/buttons/default';
import { JSONEditor } from '../lib/json-editor/index';
import { createRandomObj } from './utils';

const data = [{
  status: 'info',
  data: 'connected',
  timestamp: new Date()
}];

for (let i = 0; i < 7; i++) {
  data.push({
    status: 'success',
    data: createRandomObj(Math.round(Math.random() * 5), true),
    timestamp: new Date()
  })
}

data.push({
  status: 'fail',
  data: { message: 'Not Found' },
  timestamp: new Date(),
});

const EditorWrapper = styled.div`
  width: 800px;
  height: 550px;
`;
const App = () => (
  <div>
    <h1>CapsulaJS UI</h1>
    <h1>JSON Editor</h1>
    <EditorWrapper>
      <JSONEditor data={data}
                  path="path>path?path"
                  onDelete={(item) => console.log('Delete', item)}
                  onEdit={(item) => console.log('Edit', item)}
                  onClear={() => console.log('Clear all')}
                  onResend={(item) => console.log('Resend', item)}/>
    </EditorWrapper>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

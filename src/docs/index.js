import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DefaultButton } from '../lib/buttons/default';
import { JSONEditor } from '../lib/json-editor/json-editor';
import { createRandomObj } from './utils';
import { Paragraph, Span } from '../lib/text';
import { Modal } from '../lib/modal/modal';

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

const toggle = () => {
  const wrapper = document.getElementById('modal');
  wrapper.style.display = wrapper.style.display === '' ? 'none' : '';
};

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
    <button onClick={toggle}>Toggle modal</button>
    <div id="modal" style={{display: 'none'}}>
      <Modal title="Some title..." >Some content...</Modal>
    </div>
    <Paragraph>
      Hello, World!
    </Paragraph>
    <Paragraph fontStyle='italic' onClose={() => 'Close modal'} fontSize='2rem'>
      Hello, World!
    </Paragraph>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { DefaultButton } from '../lib/buttons/default';
import { JSONEditor } from '../lib/json-editor/index';
import { createRandomObj } from './utils';

const data = [{
  status: 'info',
  data: 'connected',
  timestamp: new Date()
}];

for (let i = 0; i < 10; i++) {
  data.push({
    status: 'success',
    data: createRandomObj(1, true),
    timestamp: new Date()
  })
}

data.push({
  status: 'fail',
  data: { message: 'Not Found' },
  timestamp: new Date(),
});

const App = () => (
  <div>
    <h1>CapsulaJS UI</h1>
    <h1>JSON Editor</h1>
    <JSONEditor data={data} path="path>path?path"/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

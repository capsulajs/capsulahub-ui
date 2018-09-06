import React from 'react';
import ReactDOM from 'react-dom';
import { DefaultButton } from '../lib/buttons/default';
import { JSONEditor } from '../lib/json-editor/index';

const App = () => (
  <div>
    <h1>CapsulaJS UI</h1>
    <h1>JSON Editor</h1>
    <JSONEditor/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

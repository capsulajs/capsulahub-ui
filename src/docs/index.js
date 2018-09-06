import React from 'react';
import ReactDOM from 'react-dom';
import { DefaultButton } from '../lib/buttons/default';
import { JSONEditor } from '../lib/json-editor/index';

const App = () => (
  <div>
    <h1>CapsulaJS UI</h1>
    <h2>Buttons</h2>
    <p>Here's an example of default button.</p>
    <DefaultButton text="Click me!" />
    <h1>JSON Editor</h1>
    <JSONEditor/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

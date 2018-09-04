import React from 'react';
import ReactDOM from 'react-dom';
import { DefaultButton } from '../lib/buttons/default';

const App = () => (
  <div>
    <h1>CapsulaJS UI</h1>
    <h2>Buttons</h2>
    <p>Here's an example of default button.</p>
    <DefaultButton text="Click me!" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

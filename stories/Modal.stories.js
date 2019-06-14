import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Modal } from 'src';

class Example extends React.Component {
  state = {
    isOpen: true,
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  onToggle = (status) => this.setState(status);

  render() {
    return (
      <React.Fragment>
        <button onClick={this.toggle}>Toggle</button>
        <Modal title="Title" isOpen={this.state.isOpen} onToggle={this.onToggle}>
          Example of modal content
        </Modal>
      </React.Fragment>
    );
  }
}

storiesOf('Modal', module).add('default', () => <Example />);

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { createRandomObj } from './utils';
import { Paragraph, Logs, Modal, Button, JsonInput, Input, CheckBox, Loader } from '../lib';

const data = [];
for (let i = 0; i < 10; i++) {
  const ratio = Math.random();
  if (0 <= ratio && ratio <= 1 / 3) {
    data.push({
      status: 'fail',
      data: { message: 'Not Found' },
      timestamp: new Date(),
    });
  }
  if (1 / 3 <= ratio && ratio <= 2 / 3) {
    data.push({
      status: 'success',
      data: createRandomObj(Math.ceil(Math.random() * 5), true),
      timestamp: new Date()
    })
  }
  if (2 / 3 <= ratio && ratio <= 1) {
    data.push({
      status: 'info',
      data: ['connected', 'disconnected'][Math.floor(Math.random() * 2)],
      timestamp: new Date()
    })
  }
}

const onChange = (newValue) => {
  console.log('change', newValue);
};

const Container = styled.div`
  padding-top: 50px;
  padding-left: 10%;
  padding-right: 10%;
`;

const Block = styled.div`
  width: 100%;
`;

const LogsContainer = styled.div`
  height: 500px;
  padding-bottom: 10px;
`;

const InputContainer = styled.div`width: 30%`;

const App = () => (
  <Container>
    <Paragraph fontSize="3rem" color="#3F3F3F" backgroundColor="#FAFAFA">CapsulaJS UI components</Paragraph>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Loader:</Paragraph>
      <Loader/>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Buttons:</Paragraph>
      <Button theme="active" text="Active" css="margin: 5px"/>
      <Button theme="disabled" text="Disabled" css="margin: 5px"/>
      <Button theme="clicked" text="Clicked" css="margin: 5px"/>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Inputs:</Paragraph>
      <InputContainer>
        <Input onChange={onChange} placeholder="Default Input"/>
      </InputContainer>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Checkboxes:</Paragraph>
      <CheckBox/>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Modals:</Paragraph>
      <Button id="modal" text="Toggle modal"/>
      <Modal id="modal" title="Some title...">Some content...</Modal>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Logs:</Paragraph>
      <LogsContainer>
        <Logs data={data}
              path="path>path?path"
              onClear={() => console.log('Clear all')}
              onResend={(item) => console.log('Resend', item)}/>
      </LogsContainer>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- JSON Input:</Paragraph>
      <JsonInput id="json-input" value={JSON.stringify(createRandomObj(3, true), null, 2)} onChange={onChange} width="100%" height="200px"/>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Typography:</Paragraph>
      <Paragraph fontSize="2.5rem">Hello, World!</Paragraph>
      <Paragraph fontSize="2rem">Hello, World!</Paragraph>
      <Paragraph fontSize="1.5rem">Hello, World!</Paragraph>
      <Paragraph fontSize="1rem">Hello, World!</Paragraph>
      <Paragraph fontSize="0.5rem">Hello, World!</Paragraph>
    </Block>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));

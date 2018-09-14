import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Logs } from '../lib/logs/logs';
import { createRandomObj } from './utils';
import { Paragraph, Span } from '../lib/text';
import { Modal } from '../lib/modal/modal';
import { Button } from '../lib/buttons/button';
import { JsonInput } from '../lib/json-input/json-input';

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

const toggle = () => {
  const wrapper = document.getElementById('modal');
  wrapper.style.display = wrapper.style.display === '' ? 'none' : '';
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

const App = () => (
  <Container>
    <Paragraph fontSize="3rem" color="#3F3F3F" backgroundColor="#FAFAFA">CapsulaJS UI components</Paragraph>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Buttons:</Paragraph>
      <Button theme="default" text="Default button" css="margin: 5px"/>
      <Button theme="lightGrey" text="LightGrey button" css="margin: 5px"/>
      <Button theme="grey" text="Grey button" css="margin: 5px"/>
      <Button theme="dark" text="Dark button" css="margin: 5px"/>
      <Button theme="transparent" text="Transparent button" css="margin: 5px"/>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Modals:</Paragraph>
      <Button onClick={toggle} theme="dark" text="Toggle modal"/>
      <div id="modal" style={{display: 'none'}}>
        <Modal title="Some title..." onClose={toggle}>Some content...</Modal>
      </div>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Logs:</Paragraph>
      <LogsContainer>
        <Logs data={data}
              path="path>path?path"
              onDelete={(item) => console.log('Delete', item)}
              onEdit={(item) => console.log('Edit', item)}
              onClear={() => console.log('Clear all')}
              onResend={(item) => console.log('Resend', item)}/>
      </LogsContainer>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- JSON Input:</Paragraph>
      <JsonInput id="json-input" data={createRandomObj(5, true)} width="100%" height="200px"/>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor="#FAFAFA">- Typography:</Paragraph>
      <Paragraph fontSize='2.5rem'>Hello, World!</Paragraph>
      <Paragraph fontSize='2rem'>Hello, World!</Paragraph>
      <Paragraph fontSize='1.5rem'>Hello, World!</Paragraph>
      <Paragraph fontSize='1rem'>Hello, World!</Paragraph>
      <Paragraph fontSize='0.5rem'>Hello, World!</Paragraph>
    </Block>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));

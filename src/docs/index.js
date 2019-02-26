import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { createRandomObj } from './utils';
import {
  Paragraph, Logs, Modal, Button,
  JsonInput, Input, CheckBox,
  Dropdown, Loader
} from '../components';
import CanvasExample from './canvas';
import CatalogExample from './catalog';

const backgroundColor = 'FAFAFA';
const data = [];
for (let i = 0; i < 25; i++) {
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

const items = [
  { label: 'one' },
  { label: 'two' },
  { label: 'three' }
];

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
  padding-top: 25px;
`;

const LogsContainer = styled.div`
  height: 500px;
  padding-bottom: 10px;
`;

const FormContaner = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #525252;
  width: 300px;
  height: 150px;
  padding: 10px;
`;

const App = () => (
  <Container>
    <Paragraph fontSize="3rem" color="#3F3F3F" backgroundColor={backgroundColor}>CapsulaJS UI components</Paragraph>
    <Block style={{ height: 500, paddingBottom: 125 }}>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor={backgroundColor}>- Catalog:</Paragraph>
      <CatalogExample/>
    </Block>
    <Paragraph fontSize="3rem" color="#3F3F3F" backgroundColor={backgroundColor}>CapsulaJS UI components</Paragraph>
    <Block style={{ height: 500, paddingBottom: 125 }}>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor={backgroundColor}>- Canvas:</Paragraph>
      <CanvasExample/>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor={backgroundColor}>- Loader:</Paragraph>
      <Loader/>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor={backgroundColor}>- Buttons:</Paragraph>
      <Button theme="active" text="Active" css="margin: 5px"/>
      <Button theme="disabled" text="Disabled" css="margin: 5px"/>
      <Button theme="clicked" text="Clicked" css="margin: 5px"/>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor={backgroundColor}>- Form:</Paragraph>
      <FormContaner>
        <Input onChange={onChange} placeholder="Default Input"/>
        <Dropdown title="Dropdown" items={items} onChange={onChange}/>
        <CheckBox label="Checkbox" onChange={onChange}/>
        <Button theme="active" text="Submit"/>
      </FormContaner>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor={backgroundColor}>- Modal:</Paragraph>
      <Button id="modal" text="Toggle modal"/>
      <Modal id="modal" title="Some title...">Some content...</Modal>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor={backgroundColor}>- Logs:</Paragraph>
      <LogsContainer>
        <Logs data={data}
              path="path>path?path"
              onClear={() => console.log('Clear all')}
              onResend={(item) => console.log('Resend', item)}/>
      </LogsContainer>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor={backgroundColor}>- JSON Input:</Paragraph>
      <JsonInput id="json-input-0" value={JSON.stringify(createRandomObj(3, true), null, 2)}
                 onChange={onChange} width="100%" height="200px"/>
    </Block>
    <Block>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor={backgroundColor}>- Typography:</Paragraph>
      <Paragraph fontSize="2.5rem">Hello, World!</Paragraph>
      <Paragraph fontSize="2rem">Hello, World!</Paragraph>
      <Paragraph fontSize="1.5rem">Hello, World!</Paragraph>
      <Paragraph fontSize="1rem">Hello, World!</Paragraph>
      <Paragraph fontSize="0.5rem">Hello, World!</Paragraph>
    </Block>
  </Container>
);

ReactDOM.render(<App/>, document.getElementById('root'));

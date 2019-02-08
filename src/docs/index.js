const items = [
  { label: 'one' },
  { label: 'two' },
  { label: 'three' }
];

const onChange = (newValue) => {
  console.log('change', newValue);
};

const creators = {
  text: { name: 'Greeting', element: () => <Paragraph fontSize="2.5rem">Welcome to the Canvas!</Paragraph> },
  logs: { name: 'Logs', element: () => <Logs data={data} path="path>path?path"/> },
  button: { name: 'Button', element: () => <Button theme="active" text="Active" css="margin: 5px"/> }
};

const App = () => (
  <Container>
    <Paragraph fontSize="3rem" color="#3F3F3F" backgroundColor={backgroundColor}>CapsulaJS UI components</Paragraph>
    <Block style={{ height: 500, paddingBottom: 125 }}>
      <Paragraph fontSize="1.5rem" color="#3F3F3F" backgroundColor={backgroundColor}>- Canvas:</Paragraph>
      <ul id="list" style={{width: 120, height: 80, margin: 10}}>
        {Object.keys(creators).map((key) => <li draggable key={key} id={key}>{creators[key].name}</li>)}
      </ul>
      <Canvas creatorListId="list" creators={creators}/>
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
  </Container>
);

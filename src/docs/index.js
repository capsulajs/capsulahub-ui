
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
  </Container>
);

import 'typeface-montserrat';
import React from 'react';
import ReactJson from 'react-json-view';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

export const theme = {
  scheme: 'custom-theme',
  base00: '#3F3F3F',
  base01: '#DEDEDE',
  base02: '#57D7FF',
  base03: '#DEDEDE',
  base04: '#DEDEDE',
  base05: '#DEDEDE',
  base06: '#DEDEDE',
  base07: '#57D7FF',
  base08: '#DEDEDE',
  base09: '#DEDEDE',
  base0A: '#000',
  base0B: '#DEDEDE',
  base0C: '#57D7FF',
  base0D: '#DEDEDE',
  base0E: '#DEDEDE',
  base0F: '#DEDEDE'
};

const Container = styled.div`
  background: #3F3F3F;
  width: 100%;
  height: 100%;
  color: #767676;
  font-style: regular;
  font-family: Montserrat;
  font-size: 13px;
  position: relative;
`;

const Wrapper = styled.div`
  width: calc(100% - 24px);
  height: calc(100% - 20px);
  padding: 12px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 10px;
`;

const Footer = styled.div`
  background: #373737;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowNumber = styled.div`width: 30px;`;
const RowTimestamp = styled.div`width: 50px;`;
const RowContent = styled.div`
  width: calc(100% - 80px);
  padding-left: 12px;
`;

const Title = styled.div`font-size: 10px;`;
const Timestamp = styled.div`color: #DEDEDE`;
const Button = styled.div`
  color: #2CFF28;
  text-decoration: underline;
  cursor: pointer;
`;

const Content = styled.div`
  width: calc(100% - 28px);
  height: calc(100% - 62px);
`;

const Clear = styled.div`cursor: pointer`;

const decorate = (timestamp) => {
  const d = new Date(timestamp);
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const hours = h > 9 ? h : `${h}0`;
  const minutes = m > 9 ? m : `${m}0`;
  const seconds = s > 9 ? s : `${s}0`;
  return [hours, minutes, seconds].join(':');
};
                                      
const Row = ({ number, item, onDelete, onEdit }) => {
  let content = <ReactJson src={item.data}
                         name={false}
                         iconStyle={'circle'}
                         theme={theme}
                         displayDataTypes={false}
                         displayObjectSize={false}
                         enableClipboard={true}
                         onDelete={onDelete}
                         onEdit={onEdit}/>;
  if (item.status === 'fail') {
    content = <FlexRow>
      <Timestamp>{decorate(item.timestamp) + ' | '}</Timestamp>
      <Button> Resend</Button>
    </FlexRow>;
  }
  
  if (item.status === 'info') {
    content = <div style={{color: '#2CFF28'}}>{item.data}</div>
  }
  
  return (<FlexRow>
    <RowNumber>{number}</RowNumber>
    <RowTimestamp>{decorate(item.timestamp)}</RowTimestamp>
    <RowContent>{content}</RowContent>
  </FlexRow>)
};

const JSONEditor = ({ data, onDelete, onEdit, onClear, path }) => <Container>
  <Wrapper>
    <Header>
      <Title>LOG</Title>
      <Clear onClick={onClear}>&#10005;</Clear>
    </Header>
    <Content>
      {data ? (
        <Scrollbars style={{marginLeft: '30px', marginTop: '20px'}}>
          {data.map((item, index) => <Row number={index + 1}
                                          item={item}
                                          onDelete={onDelete || false}
                                          onEdit={onEdit || false}
                                          key={index}/>
          )}
        </Scrollbars>
      ) : (<div>No Data..</div>)}
    </Content>
  </Wrapper>
  {path && <Footer>{path}</Footer>}
</Container>;

export { JSONEditor };

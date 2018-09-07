import 'typeface-montserrat';
import React from 'react';
import ReactJson from 'react-json-view';
import styled from 'styled-components';

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

const Wrapper = styled.div`
  background: #3F3F3F;
  width: 661px;
  height: 479px;
  color: #767676;
  padding: 12px;
  font-style: regular;
  font-family: Montserrat;
  font-size: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  padding: 10px 0;
  overflow: hidden;
  overflow-y: scroll;
  height: calc(100% - 38px);
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowNumber = styled.div`width: 50px;`;
const RowTimestamp = styled.div`width: 100px;`;
const Title = styled.div`font-size: 10px;`;

const decorate = (timestamp) => {
  const d = new Date(timestamp);
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const hours = h > 10 ? h : `${h}0`;
  const minutes = m > 10 ? m : `${m}0`;
  const seconds = s > 10 ? s : `${s}0`;
  return [hours, minutes, seconds].join(':');
};
                                      
const Row = ({ number, item, onDelete, onEdit }) => {
  let child = <ReactJson src={item.data}
                         name={false}
                         iconStyle={'circle'}
                         theme={theme}
                         displayDataTypes={false}
                         displayObjectSize={false}
                         enableClipboard={true}
                         onDelete={onDelete}
                         onEdit={onEdit}/>;
                         
  if (item.status === 'fail') {
    child = <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{color: '#DEDEDE'}}>{decorate(item.timestamp) + ' | ' }</div>
      <div style={{color: '#2CFF28', textDecoration: 'underline', cursor: 'pointer'}}> Resend</div>
    </div>;
  }
  
  if (item.status === 'info') {
    child = <div style={{color: '#2CFF28'}}>{item.data}</div>
  }
  
  return (<RowWrapper>
    <RowNumber>{number}</RowNumber>
    <RowTimestamp>{decorate(item.timestamp)}</RowTimestamp>
    <div style={{width: 'calc(100% - 150px)'}}>
      {child}
    </div>
  </RowWrapper>)
};

const JSONEditor = ({ data, onDelete, onEdit }) => <Wrapper>
  <Header>
    <Title>LOG</Title>
    <div>&#10005;</div>
  </Header>
  {data ? (
    <ScrollArea>
      {data.map((item, index) => <Row number={index + 1}
                                      item={item}
                                      onDelete={onDelete || false}
                                      onEdit={onEdit || false}
                                      key={index}/>
      )}
    </ScrollArea>
  ) : (<div>No Data..</div>)}
</Wrapper>;

export { JSONEditor };

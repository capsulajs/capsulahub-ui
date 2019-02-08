import React from 'react';
import ReactJson from 'react-json-view';
import styled from 'styled-components';
import image from 'src/assets/settings.png';
import { defaultFontFamily } from '../constants';
import { decorate } from 'src/utils';

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
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 13px;
  background: #3F3F3F;
  width: 100%;
  height: 100%;
  min-height: 200px;
  min-width: 300px;
  color: #767676;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 13px;
  padding: 10px;
`;

const Image = styled.img`
  padding-right: 5px;
  width: 16px;
  height: 16px;
`;

const Title = styled.div`
  font-size: 13px;
  text-transform: uppercase;
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

const RowPoint = styled.div`
  width: 20px;
  display: flex;
  align-items: center;
`;
const RowNumber = styled.div`width: 30px;`;
const RowTimestamp = styled.div`width: 50px;`;
const RowContent = styled.div`
  width: calc(100% - 120px);
  padding-left: 12px;
`;

const Point = styled.div`
  background: #FF505A;
  width: 4px;
  height: 4px;
  border-radius: 2px;
`;

const Timestamp = styled.div`color: #DEDEDE`;
const Button = styled.div`
  color: #2CFF28;
  text-decoration: underline;
  cursor: pointer;
`;

const Content = styled.div`
  width: calc(100% - 45px);
  height: calc(100% - 65px);
  margin-left: 35px;
  margin-right: 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    background: #3F3F3F;
    width: 2px;
  }
  ::-webkit-scrollbar-corner {
    background: #3F3F3F;
  }
  ::-webkit-scrollbar-thumb {
    background: #797979;
  }
`;

const Clear = styled.div`cursor: pointer`;
const Info = styled.div`color: #2CFF28`;

const Row = ({ number, item, onResend }) => {
  let content = <ReactJson src={item.data}
                           name={false}
                           iconStyle={'circle'}
                           theme={theme}
                           displayDataTypes={false}
                           displayObjectSize={false}
                           enableClipboard={true}
                           shouldCollapse={(field) => {
                             return Object.keys(field.src).length > 3;
                           }}/>;
  if (item.status === 'fail') {
    content = <FlexRow>
      <Timestamp>{decorate(item.timestamp) + ' | '}</Timestamp>
      <Button onClick={onResend}> Resend</Button>
    </FlexRow>;
  }
  if (item.status === 'info') {
    content = <Info>{item.data}</Info>
  }
  return (<FlexRow>
    <RowPoint>{item.status === 'fail' &&<Point></Point>}</RowPoint>
    <RowNumber>{number}</RowNumber>
    <RowTimestamp>{decorate(item.timestamp)}</RowTimestamp>
    <RowContent>{content}</RowContent>
  </FlexRow>)
};

export default ({ data, onDelete, onEdit, onClear, onResend, path }) => <Container>
  <Header>
    <FlexRow>
      <Image src={image}/>
      <Title>LOG</Title>
    </FlexRow>
    {onClear &&<Clear onClick={onClear}>&#10005;</Clear>}
  </Header>
  <Content>
    {data ? (
      data.map((item, index) => <Row key={index} number={index + 1} item={item}
                                     onDelete={onDelete || false}
                                     onEdit={onEdit || false}
                                     onResend={() => onResend && onResend(item)}/>
      )
    ) : (<div>No Data..</div>)}
  </Content>
  <Footer>{path}</Footer>
</Container>;

import React from 'react';
import styled from 'styled-components';
import { defaultFontFamily } from '../constants';

const Container = styled.div`
  font-family: ${defaultFontFamily};
  font-size: 12px;
  font-weight: 500;
  background: #737373;
  color: #B1B1B1;
  width: 100%;
  max-width: 300px;
`;

const Header = styled.div`
  font-family: ${defaultFontFamily};
  font-style: regular;
  font-size: 12px;
  width: calc(100% - 20px);
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.div``;

const ArrowDown = styled.div`
  width: 5px;
  height: 5px;
  margin-top: 10px;
  border: solid #B1B1B1 1px;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const ArrowUp = styled.div`
  width: 5px;
  height: 5px;
  margin-top: 12px;
  border: solid #B1B1B1 1px;
  border-width: 0 2px 2px 0;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

const List = styled.ul`
  position: absolute;
  z-index: 99;
  list-style-type: none;
  background: #737373;
  margin: 0;
  padding: 0;
  width: 300px;
`;

const Item = styled.li`
  text-decoration: none;
  padding: 10px;
  border-bottom: solid #5F5F5F 1px;
  :first-child { border-top: solid #5F5F5F 1px; }
  :last-child { border-bottom: none; }
  cursor: pointer;
`;

export class Dropdown extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      isOpen: false,
      title: this.props.title,
      items: this.props.items || [],
      selected: null
    }
  }
  
  handleClickOutside() {
    this.setState({
      isOpen: false
    });
  }
  
  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }
  
  select(selected) {
    this.setState({ selected });
    this.toggle();
  }
  
  render() {
    const { title,items, selected, isOpen } = this.state;
    
    return (<Container>
      <Header onClick={() => this.toggle()}>
        <Title>{Number.isInteger(selected) ? items[selected].label : title}</Title>
        {isOpen ? <ArrowUp/> : <ArrowDown/>}
      </Header>
      {isOpen &&
        <List>
          {items.map((item, index) => (<Item key={index} onClick={() => this.select(index)}>{item.label}</Item>))}
        </List>
      }
    </Container>);
  }
}

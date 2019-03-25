import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMethodsContain } from './utils';

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Header = styled.li`
  list-style-type: none;
  height: 26px;
  line-height: 26px;
  padding-left: ${({ padding }) => padding}px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #797979;
  cursor: pointer;
  &:hover {
    background: #545454;
    color: #e2e2e2;
  }
`;

const Title = styled.div`
  padding-left: 10px;
`;

const ArrowDown = styled.div`
  width: 5px;
  height: 5px;
  margin-top: 10px;
  border: solid #b1b1b1 1px;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const Item = styled.li`
  list-style-type: none;
  height: 26px;
  line-height: 26px;
  padding-left: ${({ padding }) => padding}px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #797979;
  cursor: pointer;
  &:hover {
    background: #545454;
    color: #e2e2e2;
  }
`;

const ArrowUp = styled.div`
  width: 5px;
  height: 5px;
  margin-top: 12px;
  border: solid #b1b1b1 1px;
  border-width: 0 2px 2px 0;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

export default class List extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    methods: PropTypes.array.isRequired,
    padding: PropTypes.number.isRequired,
    selectMethod: PropTypes.func.isRequired,
    selectedMethod: PropTypes.object,
  };

  static defaultProps = {
    padding: 10,
  };

  state = {
    selectedMethod: this.props.selectedMethod,
    isOpened: isMethodsContain(this.props.methods, this.props.selectedMethod),
    nestedListPadding: this.props.padding + 16,
  };

  toggle = () => this.setState({ isOpened: !this.state.isOpened });
  select = (selectedMethod) => {
    this.setState({ selectedMethod });
    this.props.selectMethod(selectedMethod);
  };
  getStyle = (method) => {
    const { selectedMethod } = this.state;
    return selectedMethod && method.id === selectedMethod.id ? { background: '#545454', color: '#e2e2e2' } : {};
  };
  renderItems = (methods) => {
    const { selectMethod, selectedMethod } = this.props;

    return methods.map((method, index) => {
      if (method.children) {
        return (
          <List
            key={index}
            name={method.name}
            methods={method.children}
            padding={this.state.nestedListPadding}
            selectMethod={selectMethod}
            selectedMethod={selectedMethod}
          />
        );
      }

      return (
        <Item
          key={index}
          padding={this.state.nestedListPadding}
          onClick={() => this.select(method)}
          style={this.getStyle(method)}
        >
          {method.name}
        </Item>
      );
    });
  };

  render() {
    const { isOpened } = this.state;
    const { name, methods, padding } = this.props;

    return (
      <Container>
        <Header padding={padding} onClick={this.toggle}>
          {isOpened ? <ArrowDown /> : <ArrowUp />}
          <Title>{name}</Title>
        </Header>
        {isOpened && this.renderItems(methods)}
      </Container>
    );
  }
}

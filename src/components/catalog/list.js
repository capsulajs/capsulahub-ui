import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.toggle = this.toggle.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  toggle() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  renderItems(items) {
    const { padding, onSelect } = this.props;

    return items.map((item, i) => {
      if (item.children) {
        return <List key={i} name={item.name} items={item.children} onSelect={onSelect} padding={padding + 16} />;
      }

      return (
        <Item key={i} padding={padding + 16} onClick={() => onSelect(item)}>
          {item.name}
        </Item>
      );
    });
  }

  render() {
    const { isOpened } = this.state;
    const { name, items, padding } = this.props;

    return (
      <Container>
        <Header padding={padding} onClick={this.toggle}>
          {isOpened ? <ArrowDown /> : <ArrowUp />}
          <Title>{name}</Title>
        </Header>
        {isOpened && this.renderItems(items)}
      </Container>
    );
  }
}

List.defaultProps = {
  padding: 10,
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  padding: PropTypes.number.isRequired,
};

export default List;
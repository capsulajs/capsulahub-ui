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
  padding-left: ${(props) => props.level * 10}px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #797979;
  cursor: pointer;
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
  }

  toggle() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const { isOpened } = this.state;
    const { name, items, onSelect, level } = this.props;

    console.log(items);

    return (
      <Container>
        <Header level={level} onClick={this.toggle}>
          {isOpened ? <ArrowDown /> : <ArrowUp />}
          <Title>{name}</Title>
        </Header>
        {isOpened && 'lols'}
      </Container>
    );
  }
}

List.defaultProps = {
  level: 1,
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
};

export default List;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from './list';

const Container = styled.div`
  width: 300px;
  height: 100%;
  line-height: 100%;
  background: #494949;
  color: #9e9e9e;
  font-family: Roboto;
  font-size: 14px;
  overflow-y: scroll;
`;

class Catalog extends React.Component {
  render() {
    const { menu, onSelect } = this.props;

    return (
      <Container>
        {menu.map(({ name, children }) => (
          <List name={name} items={children} onSelect={onSelect} />
        ))}
      </Container>
    );
  }
}

Catalog.propTypes = {
  menu: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Catalog;

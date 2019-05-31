import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from './list';

const Container = styled.div`
  background: #494949;
  color: #9e9e9e;
  font-family: Roboto;
  font-size: 14px;
  width: 300px;
  height: 100%;
  line-height: 100%;
  overflow-y: scroll;
`;

export default class Catalog extends React.Component {
  static propTypes = {
    methods: PropTypes.array.isRequired,
    selectMethod: PropTypes.func.isRequired,
    selectedMethod: PropTypes.object,
  };

  render() {
    const { methods, selectMethod, selectedMethod } = this.props;

    return (
      <Container>
        {methods.map(({ name, children }) => (
          <List key={name} name={name} methods={children} selectMethod={selectMethod} selectedMethod={selectedMethod} />
        ))}
      </Container>
    );
  }
}

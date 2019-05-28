import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import enhanceWithClickOutside from 'react-click-outside';
import { defaultFontStyle, defaultFontWeight, defaultFontSize, defaultFontFamily, defaultColor } from '../constants';

const Container = styled.div`
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  width: ${(props) => props.width || 200}px;
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

const List = styled.div`
  position: absolute;
  z-index: 99;
  background: #e1e1e1;
  color: #373737;
  width: ${(props) => props.width || 200}px;
`;

const Item = styled.div`
  text-decoration: none;
  padding: 10px;
  width: calc(100% - 20px);
  border-bottom: solid #d9d9d9 1px;
  background: #e1e1e1;
  cursor: pointer;

  :first-child {
    border-top: solid #d9d9d9 1px;
  }

  :last-child {
    border-bottom: none;
  }

  &:hover {
    background: #d9d9d9;
  }
`;

class Dropdown extends React.Component {
  static defaultProps = {
    theme: {
      fontStyle: defaultFontStyle,
      fontWeight: defaultFontWeight,
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
      color: defaultColor,
    },
    items: [],
    dataCy: 'dropdown',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    width: PropTypes.number,
    dataCy: PropTypes.string,
    theme: PropTypes.object,
  };

  state = {
    isOpen: false,
  };

  toggle = () => this.setState((prevState) => ({ isOpen: !prevState.isOpen }));

  select = (item) => {
    this.toggle();
    this.props.onChange(item);
  };

  render() {
    const { theme, width, items, dataCy, selected, title } = this.props;
    const { isOpen } = this.state;

    return (
      <Container theme={theme} data-cy={dataCy} width={width}>
        <Header onClick={this.toggle} data-cy={`${dataCy}-header`}>
          <Title data-cy={`${dataCy}-title`}>{selected || title}</Title>
          {isOpen ? <ArrowUp data-cy={`${dataCy}-arrow-up`} /> : <ArrowDown data-cy={`${dataCy}-arrow-down`} />}
        </Header>
        {isOpen && (
          <List data-cy={`${dataCy}-options`} width={width}>
            {items.map((item, index) => (
              <DropdownItem dataCy={`${dataCy}-option-${item.label}`} key={index} item={item} select={this.select} />
            ))}
          </List>
        )}
      </Container>
    );
  }
}

const DropdownItem = ({ select, item, dataCy }) => {
  const handleOnClick = () => select(item);

  return (
    <Item data-cy={dataCy} onClick={handleOnClick}>
      {item.label}
    </Item>
  );
};

export default enhanceWithClickOutside(Dropdown);

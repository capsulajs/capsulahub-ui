import React from 'react';
import styled from 'styled-components';
import image from '../../assets/loader.png';

const LoaderImg = styled.img`
  width: 100px;
  height: 20px;
`;

const Loader = () => <LoaderImg src={image}></LoaderImg>

export { Loader };

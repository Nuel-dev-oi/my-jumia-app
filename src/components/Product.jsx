import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  height: 100vh;
  background-color: #fff;
  grid-column-start: 2;
  grid-column-end: span 2;
`;

const Product = () => {
  return <Div>This is the Products Page</Div>;
};

export default Product;

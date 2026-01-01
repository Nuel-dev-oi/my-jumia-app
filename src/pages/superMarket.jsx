import React from 'react';
import styled from 'styled-components';
import NavPage from '../components/NavPage';

const Div = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  height: 100vh;
  background-color: #ebe8e8ff;
  grid-column-start: 2;
  grid-column-end: span 2;
`;

const Super = () => {
  return (
    <Div>
      <NavPage />
    </Div>
  );
};

export default Super;

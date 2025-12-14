import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  background-color: #fff;
  width: 100%;
  height: 100%;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: span 1;
  white-space: pre;
`;

const SubAds = ({ style, children }) => {
  return (
    <Div
      style={{
        ...style,
      }}
    >
      {children}
    </Div>
  );
};

export default SubAds;

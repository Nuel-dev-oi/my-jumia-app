import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  // border: solid 2px green;
`;

const Footer = ({ style }) => {
  return (
    <Foot
      style={{
        ...style,
      }}
    >
      This is the Footer page
    </Foot>
  );
};

export default Footer;

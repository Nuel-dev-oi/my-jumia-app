import React from 'react';
import styled from 'styled-components';
import logo from '../assets/jumia.svg';

const Img = styled.img`
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-inline-start: 3px;
  font-size: 1rem;
  margin-bottom: 4px;
`;

const Div = styled.div`
  background-color: #eee;
  font-size: 0.8rem;
  color: orange;
  display: flex;
  justify-content: space-around;
  padding: 4px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Span = styled.span`
  margin-left: -40%;
  @media (max-width: 700px) {
    margin-left: -200px;
  }
`;

const SecondHeader = ({ logoName }) => {
  return (
    <Div>
      <Span>
        <Img src={logo} alt={`${logoName}'s name`} />
        Sell on {`${logoName}`}
      </Span>
      <Span
        style={{
          color: '#000',
          whiteSpace: 'pre',
          fontSize: '1.1rem',
          fontWeight: '500',
          marginLeft: '-70%',
        }}
      >
        {`${logoName}`}
        <Img
          src={logo}
          alt={`${logoName}'s name`}
          style={{
            margin: '-1px',
          }}
        />{' '}
        <span
          style={{
            margin: '15px',
            fontSize: '1rem',
          }}
        >
          PAY
        </span>{' '}
        <Img src={logo} alt={`${logoName}'s name`} />
        DELIVERY
      </Span>
    </Div>
  );
};

export default SecondHeader;

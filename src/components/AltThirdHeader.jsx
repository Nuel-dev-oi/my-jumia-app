import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/jumia.svg';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import FormSearch from './Form';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  padding-bottom: 10px;
  box-shadow: 0px 0px 2px 1px rgb(200, 200, 200);
  background-color: #fff;
  z-index: 10;
`;

const Span = styled.span`
  white-space: nowrap;
  flex: 0 1 auto;
  font-size: 1.5rem;
  font-weight: 600;
  margin-inline-start: 10px;
`;

const Img = styled.img`
  vertical-align: middle;
  flex: 0 1 auto;
  width: 20px;
  height: 20px;
`;

const User = styled.span`
  &:hover {
    color: orange;
  }
`;

function AltThirdHeader({ logoName }) {
  const [position, setPosition] = useState({
    position: 'static',
    top: '0',
  });

  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let firstHeader = $('.firstHeader');
      let vectY = firstHeader.get(0).getBoundingClientRect().y;
      if (vectY <= -44) {
        setPosition({
          position: 'fixed',
          top: '0',
        });
      } else {
        setPosition({
          position: 'static',
        });
      }
    });
  });
  window.addEventListener('resize', () => {
    let size = window.innerWidth;
    setSize(size);
  });

  return (
    <Div
      style={{
        position: position?.position,
        top: position?.top,
        display: 'flex',
        width: `${size - 20}px`,
      }}
    >
      <FaBars
        style={{
          margin: '15px',
        }}
      />
      <Span
        style={{
          marginRight: 'auto',
        }}
      >
        {logoName.toUpperCase()}
        <Img src={logo} type="image/svg+xml" alt={`${logoName} logo`} />
      </Span>

      <Span>
        <User>
          <FaUser
            style={{
              marginRight: '30px',
              cursor: 'pointer',
            }}
          />
        </User>

        <User>
          <FaShoppingCart
            style={{
              marginRight: '30px',
              cursor: 'pointer',
            }}
          />
        </User>
      </Span>
      <FormSearch
        style={{
          borderRadius: ' 0 25px 25px 0',
          width: '150%',
        }}
        search={{
          borderRadius: '25px 0 0 25px',
          marginLeft: '-30%',
          width: '20%',
          fontSize: '45em',
          flex: '0 1 auto',
          padding: '10px',
        }}
      />
    </Div>
  );
};

export default AltThirdHeader;

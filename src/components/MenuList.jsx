import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaQuestionCircle, FaShoppingCart } from 'react-icons/fa';

const icons = ['user', 'help', 'cart'];

const HeaderSpan = styled.span`
  color: #000;
  margin-left: 10px;
  margin-right: 15px;

  &:hover {
    color: orange;
  }
`;

const MenuList = ({ content, icon, index }) => {
  const [rotate, setRotate] = useState('-90');
  const [down, setDown] = useState(false);
  return (
    <HeaderSpan
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      }}
      onClick={() => {
        down ? setDown(false) : setDown(true);
        down ? setRotate('-90') : setRotate('90');
        console.log(down);
      }}
    >
      {icon === icons[0] ? (
        <FaUser
          style={{
            marginInline: '10px',
            marginTop: '2px',
          }}
        />
      ) : icon === icons[1] ? (
        <FaQuestionCircle
          style={{
            marginInline: '10px',
            marginTop: '2px',
          }}
        />
      ) : icon === icons[2] ? (
        <FaShoppingCart
          style={{
            marginInline: '10px',
            marginTop: '2px',
          }}
        />
      ) : null}{' '}
      {content}{' '}
      <span
        style={{
          transform: `rotateZ(${rotate}deg)`,
          display: 'inline-block',
          marginLeft: `${down ? 16 : 6}px`,
          fontSize: '1.1rem',
          marginTop: '-3px',
          cursor: 'pointer',
        }}
      >
        {index === 2 ? null : ' \u2039'}
      </span>
    </HeaderSpan>
  );
};

export default MenuList;

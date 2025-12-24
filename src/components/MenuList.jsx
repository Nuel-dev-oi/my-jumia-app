import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaQuestionCircle, FaShoppingCart } from 'react-icons/fa';
import AccountMenu from './AccountMenu';

const icons = ['user', 'help', 'cart'];

const HeaderSpan = styled.span`
  color: #000;
  margin-left: 10px;
  margin-right: 15px;
  box-shadow: 0px 0px 10px 1px gray;
  margin: 15px;
  padding: 10px;

  &:hover {
    color: orange;
  }

  &:active {
    background-color: gray;
  }
`;

const MenuList = ({ content, icon, index, account: [viewAcc, setViewAcc] }) => {
  const navigate = useNavigate();
  const [rotate, setRotate] = useState('-90');
  const [down, setDown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem('loggedIn'))
  );

  const handleClick = () => {
    viewAcc == 'none' ? setViewAcc('flex') : setViewAcc('none');
  };

  const handleScroll = () => {
    if (viewAcc === 'flex') {
      setDown(false);
      setRotate('-90');
      setViewAcc('none');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewAcc]);

  return (
    <>
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
          icon === icons[0] && handleClick();
          icon === icons[2] && navigate('/cart');
        }}
      >
        {icon === icons[0] ? (
          <FaUser
            style={{
              marginRight: '10px',
              marginTop: '2px',
            }}
          />
        ) : icon === icons[1] ? (
          <FaQuestionCircle
            style={{
              marginRight: '10px',
              marginTop: '2px',
            }}
          />
        ) : icon === icons[2] && loggedIn === true ? (
          <FaShoppingCart
            style={{
              marginRight: '10px',
              marginTop: '2px',
            }}
          />
        ) : null}{' '}
        {icon !== icons[2] ? content : loggedIn === true ? content : null}{' '}
        <span
          style={{
            transform: `rotateZ(${rotate}deg)`,
            display: 'inline-block',
            marginLeft: `${down && icon !== icons[2] ? 16 : 6}px`,
            fontSize: '1.1rem',
            marginTop: '-3px',
            cursor: 'pointer',
          }}
        >
          {index === 2 ? null : ' \u2039'}
        </span>
      </HeaderSpan>

      <AccountMenu
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        viewAcc={viewAcc}
      />
    </>
  );
};

export default MenuList;

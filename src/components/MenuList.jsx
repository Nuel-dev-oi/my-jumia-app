import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AccountMenu from './AccountMenu.jsx';
import CartScreen from './CartScreen.jsx';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiOutlineQuestionMarkCircle, HiOutlineUser } from 'react-icons/hi';

const icons = ['user', 'help', 'cart'];

const HeaderSpan = styled.span`
  color: #000;
  margin-left: 10px;
  margin-right: 15px;
  box-shadow: 0px 0px 10px 1px gray;
  margin: 15px;
  padding: 8px;
  position: relative;

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

  useEffect(() => {
    const handleScroll = () => {
      if (viewAcc === 'flex') {
        setDown(false);
        setRotate('-90');
        setViewAcc('none');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setViewAcc, viewAcc]);

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
          <HiOutlineUser
            style={{
              marginRight: '5px',
              marginTop: '-5px',
            }}
            size={22}
          />
        ) : icon === icons[1] ? (
          <HiOutlineQuestionMarkCircle
            style={{
              marginRight: '5px',
              marginTop: '-5px',
            }}
            size={22}
          />
        ) : icon === icons[2] && loggedIn === true ? (
          <MdOutlineShoppingCart
            style={{
              marginRight: '5px',
              marginTop: '-5px',
            }}
            size={22}
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
        {index === 2 && <CartScreen />}
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

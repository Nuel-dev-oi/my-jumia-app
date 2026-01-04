import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/jumia.svg';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import FormSearch from './Form';
import Navigation from "./min_component/Navigation.jsx";
import { Link } from 'react-router-dom';
import AccountMenu from './AccountMenu.jsx';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
  box-shadow: 0px 0px 2px 1px rgb(200, 200, 200);
  background-color: #fff;
  z-index: 400;
  a {
    text-decoration: none;
  }
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
  const [view, setView] = useState(false);
  const [viewAcc, setViewAcc] = useState('none');
  const [position, setPosition] = useState({
    position: 'static',
    top: '0',
  });

  const [loggedIn, setLoggedIn] = useState(
      JSON.parse(localStorage.getItem('loggedIn'))
    );

  const onSetView = (value) => {
    setView(value);
  }

  const [size, setSize] = useState(window.innerWidth);

  const handleClick = () => {
    viewAcc == 'none' ? setViewAcc('flex') : setViewAcc('none');
  };

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
    <>
      <Div
        style={{
          position: position?.position,
          top: position?.top,
          display: 'flex',
          width: `${size}px`,
        }}
      >
        <FaBars
          style={{
            margin: '15px',
            cursor: "pointer",
          }}
          onClick={() => {
            view === true ? setView(false) : setView(true);
            
           view === true ? document.body.style.overflow = "scroll" 
              : document.body.style.overflow = "hidden";
          }}
        />
        <Span
          style={{
            marginRight: 'auto',
          }}
        >
          <Link
            to="/"
            style={{
              color: '#000',
            }}
          >
            {logoName.toUpperCase()}
            <Img src={logo} type="image/svg+xml" alt={`${logoName} logo`} />
          </Link>
        </Span>

        <Span>
          <User>
            <FaUser
              style={{
                marginRight: '30px',
                cursor: 'pointer',
              }}
              onClick={handleClick}
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
      {
        view &&
      <Navigation onSetView={onSetView} />
      }
      <AccountMenu
        viewAcc={viewAcc}
         loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
    </>
  );
}

export default AltThirdHeader;

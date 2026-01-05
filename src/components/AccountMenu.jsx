import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdList } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { removeAll } from '../cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Account = styled.div`
  background-color: #fff;
  position: absolute;
  width: 170px;
  height: 200px;
  box-shadow: 0px 0px 5px 1px gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 1px;
  right: 170px;
  z-index: 10000000000000000000;

  @media(max-width: 700px) {
    position: fixed;
    left: 0px;
    top: 130px;
    width: 75%;
    height: 100vh;
  }
`;

const Button = styled.button`
  width: 90%;
  height: 70%;
  color: #fff;
  background-color: orange;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px gray;
  border-radius: 5px;
  border-color: rgba(236, 107, 32, 1);
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Item = styled.div`
  height: calc(70% / 3);
  font-weight: 100;
  margin-left: 10px;

  cursor: pointer;
  &:hover {
    font-weight: 400;
  }
`;

const Span = styled.span`
  width: ${() => window.innerWidth <= 700 ? "50%" : "90%"};
  height: 70%;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px gray;
  border-radius: 5px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0px 0px 5px #000;
  font-size: 1.2em;
  cursor: default;
`;

function handleKeyboardScroll(e, scrollStep = 100) {
  const scrollTop = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;

  switch (e.key) {
    case 'Home':
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;

    case 'End':
      e.preventDefault();
      window.scrollTo({ top: docHeight - winHeight, behavior: 'smooth' });
      break;

    case 'PageUp':
      e.preventDefault();
      window.scrollTo({
        top: Math.max(scrollTop - scrollStep, 0),
        behavior: 'smooth',
      });
      break;

    case 'PageDown':
      e.preventDefault();
      window.scrollTo({
        top: Math.min(scrollTop + scrollStep, docHeight - winHeight),
        behavior: 'smooth',
      });
      break;

    default:
      break;
  }
}

const AccountMenu = ({ loggedIn, viewAcc, setLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [scroll, setScroll] = useState('165');
  const headerRef = useRef();
  const users = useSelector((state) => state.users);
  const [name, setName] = useState(null);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      viewAcc === "flex" ? document.body.style.overflow = "hidden" 
      : document.body.style.overflow = "scroll";
    }
    return;
  }, [viewAcc]);

  useEffect(() => {
      function setUserName() {
        if (loggedIn) {
          setName(`Welcome, ${localStorage.getItem('username')}`);
        } else {
          setName(null);
        }
      }
  
      setUserName();
    }, [users, loggedIn]);

  useEffect(() => {
    const target = (headerRef.current = document.querySelector('.header'));
    if (!target) return;

    const handleScroll = () => {
      const rect = target.getBoundingClientRect();
      const offset = window.innerHeight;
      const top =
        window.scrollY <= 5
          ? rect.bottom + window.scrollY - offset * 0.03
          : rect.bottom + window.scrollY - offset * 0.19 + 7;
      setScroll(top);
    };

    const handleKeyDown = (e) => {
      handleKeyboardScroll(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);

    // initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    location.pathname === '/holiday_sales'
      ? setLoggedIn(false)
      : setLoggedIn(true);
  }, [location.pathname, setLoggedIn]);

  return (
    <Account
      style={{
        display: `${viewAcc}`,
        top: `${window.innerWidth > 700 ? `${scroll}px` : "0px"}`,
      }}
    >
      <div
        style={{
          width: '100%',
          height: `${window.innerWidth <= 700 ? "12%" : "30%"}`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 0px 5px 1px gray',
        }}
      >
        {loggedIn ? (
          <Span>Logged In</Span>
        ) : (
          <Button>
            <Link
              to="/sign_in"
              style={{
                width: '100%',
                height: '100%',
                color: '#fff',
              }}
            >
              Sign In
            </Link>
          </Button>
        )}
      </div>
      {
        loggedIn &&
        <Item
          style={{
            marginTop: '10px',
            color: "orange",
          }}
        >
          <BsPerson
            size={20}
            style={{
              verticalAlign: 'middle',
              marginRight: '5px',
            }}
          />
          {name}
        </Item>
      }
      {
        loggedIn && 
        <Item
          style={{
            color: "orange",
          }}
        >
          <MdList
            size={20}
            style={{
              verticalAlign: 'middle',
              marginRight: '5px',
            }}
          />
          Orders
        </Item>
      }
      {
        loggedIn &&
        <Item
          style={{
            color: "orange",
          }}
        >
          <FaRegHeart
            size={20}
            style={{
              verticalAlign: 'middle',
              marginRight: '5px',
            }}
          />
          Wishlist
        </Item>
      }
      {JSON.parse(localStorage.getItem('loggedIn')) ? (
        <Button
          style={{
            width: '100%',
            height: `${window.innerWidth <= 700 ? "10%" : "25%"}`,
          }}
          onClick={() => {
            localStorage.removeItem('loggedIn');
            dispatch(removeAll());
            navigate('/holiday_sales');
          }}
        >
          LogOut
        </Button>
      ) : null}
    </Account>
  );
};

export default AccountMenu;

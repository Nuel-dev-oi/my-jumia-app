import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import cart from '../assets/largeCart.png';
import sponsors from '../scripts/sponsoredList.js';
import FlashSale from './FlashSale.jsx';
import { useSelector } from 'react-redux';
import CartItem from './CartItem.jsx';

const Div = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  height: 100vh;
  background-color: #eeeeeeff;
  grid-column-start: 2;
  grid-column-end: span 2;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    height: max-content;
    padding: 10px;
  }
`;
const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  height: 50%;
  padding-block: 15px;
`;

const Img = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 50%;
`;

const ImgDiv = styled.div`
  width: 150px;
  height: 150px;
  background-color: #f9f8f8ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  font-size: 1em;
  font-weight: 200;
`;

const Button = styled.button`
  background-color: rgba(254, 79, 3, 1);
  color: #fff;
  border: none;
  font-size: 0.9em;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  white-space: nowrap;
  box-shadow: 0px 0px 10px 1px gray;

  &:active {
    box-shadow: 0px 0px 5px 1px gray;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

const Cart = () => {
  const [loggedIn, _] = useState(
    JSON.parse(localStorage.getItem('loggedIn')) || false
  );
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(false);
  const cartStorage = useSelector((state) => state.cart);

  useEffect(() => {
    const handleIsEmpty = () => {
      cartStorage.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
    };

    handleIsEmpty();
  }, [cartStorage]);

  useEffect(() => {
    if (!loggedIn) {
      navigate('/holiday_sales');
    }
  }, [navigate, loggedIn]);

  return (
    <>
      <Div>
        {isEmpty ? (
          <InnerDiv>
            <ImgDiv>
              <Img src={cart} alt="Large cart" />
            </ImgDiv>
            <P
              style={{
                fontWeight: '400',
              }}
            >
              Your cart is empty
            </P>
            <P>Browse our categories and discover our best deals!</P>
            <Button>
              <Link
                to="/"
                style={{
                  color: '#fff',
                }}
              >
                Start shopping
              </Link>
            </Button>
          </InnerDiv>
        ) : (
          <CartItem />
        )}
        <FlashSale
          products={sponsors}
          name="Recently Viewed"
          style={{
            backgroundColor: '#fff',
          }}
          color={{
            color: '#000',
            fontWeight: '200',
          }}
          see={false}
        />
      </Div>
    </>
  );
};

export default Cart;

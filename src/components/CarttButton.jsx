import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add, increment, decrement } from '../cartSlice.js';
import { useLocation } from 'react-router-dom';
import Screen from './Screen.jsx';

const CartButt = styled.div`
  box-shadow: 0px 0px 15px 0px gray;
  height: 78%;
  background-color: rgba(254, 126, 28, 1);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: rgba(233, 104, 5, 1);
  }
  &:active {
    box-shadow: 0px 0px 10px 0px gray;
  }
`;

const CartDiv = styled.div`
  box-shadow: 0px 1px 1px 1px #eee;
  width: 99%;
  height: 70px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.9em;
  font-weight: 200;
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: rgba(254, 126, 28, 1);
  color: #fff;
  box-shadow: 0px 0px 5px 0px gray;
  font-size: 1.5em;
  padding: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const Span = styled.span`
  font-weight: 100;
  font-size: 1em;
`;

const CartButton = () => {
  const cartRef = useRef();
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();
  const [choose, setChoose] = useState(false);
  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false);

  const itemIndex = () => {
    const pathname = location.pathname;
    const cart = JSON.parse(localStorage.getItem('cartItems'));
    const index = cart.findIndex(
      (item) =>
        item.productId === pathname.substring(pathname.lastIndexOf('/') + 1)
    );
    return index;
  };

  const handleIncrement = () => {
    let num = count;
    ++num;
    setCount(num);
  };

  const handleDecrement = () => {
    if (count > 1) {
      let num = count;
      --num;
      setCount(num);
    }
  };

  useEffect(() => {
    const pathname = location.pathname;
    function count() {
      const productId = pathname.substring(pathname.lastIndexOf('/') + 1);
      const cart = JSON.parse(localStorage.getItem('cartItems'));
      const product = cart.find((item) => item.productId === productId);

      if (product !== -1) {
        setCount(product?.itemCount || 1);
      } else {
        setCount(1);
      }

      setAdded(false);
    }
    count();
  }, [location.pathname]);

  useEffect(() => {
    const pathname = location.pathname;
    const current = cartRef.current;
    const productId = pathname.substring(pathname.lastIndexOf('/') + 1);

    const handleClick = () => {
      dispatch(
        add({
          productId,
          itemCount: 1,
        })
      );
      if (!choose) {
        setAdded(true);
      }
    };

    if (!choose) {
      current.addEventListener('click', handleClick);
    }

    const cartStorage = JSON.stringify(cartItems);
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartItems', cartStorage);

    const cart = JSON.parse(localStorage.getItem('cartItems'));
    const index = cart.findIndex(
      (item) =>
        item.productId === pathname.substring(pathname.lastIndexOf('/') + 1)
    );

    function searchIndex() {
      if (index !== -1) {
        setChoose(true);
      } else {
        setChoose(false);
      }
    }
    searchIndex();
    let timeOut;
    if (added) {
      timeOut = setTimeout(() => {
        setAdded(false);
      }, 5000);
    }

    return () => {
      current.removeEventListener('click', handleClick);
      clearTimeout(timeOut);
    };
  }, [cartItems, location.pathname, dispatch, added, choose, count]);

  return (
    <>
      <CartDiv ref={cartRef}>
        {!choose ? (
          <CartButt>
            <MdOutlineShoppingCart
              size={24}
              style={{
                position: 'absolute',
                left: '20px',
              }}
            />
            Add to cart
          </CartButt>
        ) : (
          <Select>
            <Button
              onClick={() => {
                handleDecrement();
                let i = itemIndex();
                dispatch(decrement(i));
              }}
            >
              -
            </Button>
            <Span>{count}</Span>
            <Button
              onClick={() => {
                handleIncrement();
                let i = itemIndex();
                dispatch(increment(i));
              }}
              style={{
                marginLeft: '15px',
              }}
            >
              +
            </Button>
            <Span>({count} item(s) added)</Span>
          </Select>
        )}
      </CartDiv>
      {added ? <Screen screen="added" /> : null}
    </>
  );
};

export default CartButton;

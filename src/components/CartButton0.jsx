import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add } from '../cartSlice.js';
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

const CartButton0 = () => {
  const cartRef = useRef();
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();
  const [added, setAdded] = useState(false);
  const [info, setInfo] = useState('Product added sucessfully');
  useEffect(() => {
    const current = cartRef.current;
    const pathname = location.pathname;
    const productId = pathname.substring(pathname.lastIndexOf('/') + 1);

    const handleClick = () => {
      let flag;
      const prod = cartItems.find((item) => item.productId === productId);
      if (!prod) {
        setAdded(true);
        flag = true;
        dispatch(
          add({
            productId,
            itemCount: 1,
          })
        );
      }
      if (prod) {
        setInfo('Product already in cart');
        setAdded(true);
        setTimeout(() => setAdded(false), 5000);
      }

      if (flag) {
        setTimeout(() => setAdded(false), 5000);
        flag = false;
      }
    };

    current.addEventListener('click', handleClick);

    return () => current.removeEventListener('click', handleClick);
  }, [cartItems, location.pathname, dispatch, added]);

  return (
    <>
      <CartDiv ref={cartRef}>
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
      </CartDiv>
      {added && <Screen screen={info} />}
    </>
  );
};

export default CartButton0;

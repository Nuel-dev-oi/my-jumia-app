import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Div = styled.div`
  position: absolute;
  top: 0px;
  right: 40px;
  width: 15px;
  height: 15px;
  background-color: orange;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 3000000;
  font-size: 0.9em;
  box-shadow: 0px 0px 20px 0px green;
  padding: 5px;
  overflow: hidden;
  font-weight: 600;
`;

const CartScreen = () => {
  const [count, setCount] = useState(1);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const setItemCount = () => {
      const count = cart.reduce((prev, { itemCount }) => {
        return prev + itemCount;
      }, 0);
      setCount(count);
    };
    setItemCount();
  }, [cart]);

  return <>{count ? <Div>{count}</Div> : null}</>;
};

export default CartScreen;

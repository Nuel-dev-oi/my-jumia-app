import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartItemProduct from './CartItemProduct.jsx';
import items from '../scripts';
import Order from './Order.jsx';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  background-color: #fff;
  width: 100%;
  height: 50%;
  padding-block: 15px;
  padding: 0px;
  background-color: #eee;

  @media (max-width: 700px) {
    flex-direction: column;
    height: max-content;
    margin-top: 15px;
  }
`;

const Summary = styled.div`
  width: 27%;
  margin: 0px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px #aaa;
  margin-right: 10px;
  margin-top: 5px;
  font-weight: 400;

  @media (max-width: 700px) {
    width: 100%;
    margin-block: 15px;
    padding: 10px;
  }
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  padding: 5px;
  width: 100%;
  font-weight: 200;
`;

const Span = styled.span`
  font-size: 1em;
  font-weight: 200;
`;

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
  font-size: 0.9em;

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

const InnerDiv = styled.div`
  width: 70%;
  height: 95%;
  padding: 0px;
  margin: 0px;
  margin-top: 5px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 0px;
  }
`;

const Para = styled.div`
  width: 100%;
  margin: 0px;
  height: max-content;
  font-size: 1.3em;
  box-shadow: 0px 1px 1px 1px #eee;
  display: flex;
  padding: 10px;
  font-weight: 300;
  background-color: #fff;
  margin-top: 0px;
  position: sticky;
  top: 0;
  z-index: 1;
`;
function convertStrToNum(str) {
  if (!str) return '';
  return Number(str.replace(/,/g, ''));
}

const CartItem = () => {
  const [order, setOrder] = useState(false);
  const cartStorage = useSelector((state) => state.cart);
  const cartRef = useRef();
  const [amount, setAmount] = useState();
  const [position, setposition] = useState({ top: '0', pos: 'static' });

  const onSetOrder = (value) => {
    setOrder(value);
  };

  useEffect(() => {
    const handleCartSummary = () => {
      const newAmount = cartStorage
        .map((item) => {
          let product = items.find((prod) => prod.id === item.productId);
          let price = product?.price;

          return { ...item, price: convertStrToNum(price) };
        })
        .reduce((initial, { itemCount, price }) => {
          return initial + itemCount * price;
        }, 0);
      setAmount(Number(newAmount).toLocaleString('en-US'));
    };

    handleCartSummary();
  }, [cartStorage]);

  useEffect(() => {
    const element = cartRef.current;
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      let isScrolling = true;
      if (isScrolling) {
        if (rect.y <= 65) {
          setposition({
            pos: 'fixed',
            top: '100px',
            right: '67px',
            width: '307px',
          });
        } else {
          setposition({ pos: 'static', width: '' });
        }

        if (rect.y <= -6) {
          setposition({
            pos: 'absolute',
            top: `calc(50% - 10px)`,
            right: '65px',
            width: '307px',
          });
        }
      }
      isScrolling = false;
    };
    window.innerWidth > 700 && window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {order && <Order onSetOrder={onSetOrder} />}
      <Div ref={cartRef}>
        <InnerDiv>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 0 auto',
            }}
          >
            <Para>Cart ({cartStorage.length})</Para>
            {cartStorage.map((item, i) => (
              <CartItemProduct key={i} product={item} referrer={cartRef} />
            ))}
          </div>
        </InnerDiv>
        <Summary
          style={{
            top: `${position.top}`,
            position: `${position.pos}`,
            right: `${position.right}`,
            width: `${position.width}`,
          }}
        >
          <Para
            style={{
              width: '100%',
              borderRadius: '10px 10px 0 0',
              fontWeight: '200',
              fontSize: '.9em',
              position: 'static',
            }}
          >
            CART SUMMARY
          </Para>
          <Subtotal>
            <Span
              style={{
                fontSize: '.9em',
                paddingTop: '5px',
              }}
            >
              Subtotal
            </Span>
            <Span
              style={{
                fontWeight: '400',
              }}
            >
              {'\u20a6'} {amount}
            </Span>
          </Subtotal>
          <CartDiv>
            <CartButt
              onClick={() => {
                onSetOrder(true);
              }}
            >
              Checkout ({'\u20a6'} {amount})
            </CartButt>
          </CartDiv>
        </Summary>
      </Div>
    </>
  );
};

export default CartItem;

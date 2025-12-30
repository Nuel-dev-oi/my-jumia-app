import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import items from '../scripts';
import { FiTrash2 } from 'react-icons/fi';
import { IoPaperPlane } from 'react-icons/io5';
import Screen from './Screen';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../cartSlice.js';
import { useSelector } from 'react-redux';

const Div = styled.div`
  font-size: 1em;
  width: 100%;
  height: max-content;
  display: flex;
  flex: 1 0 auto;
`;
const Img = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 15px;
`;

const Span = styled.span`
  height: 20%;
  font-weight: 400;
  font-size: 0.9em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: orange;
  margin: 5px;

  &: hover {
    background-color: #ffcff2ff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #aaa;
  }
`;

const Select = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  font-weight: 200;
  height: 130px;
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
`;

function handleDiscount(formerPrice, price) {
  let oldPrice = Number(formerPrice?.replace(/,/g, ''));
  let newPrice = Number(price?.replace(/,/g, ''));
  return (((newPrice - oldPrice) / oldPrice) * 100).toFixed(2);
}

const CartItemProduct = ({ product }) => {
  const [currentItem, setCurrentItem] = useState({});
  const [removed, setRemoved] = useState(false);
  const [count, setCount] = useState(product.itemCount);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const itemIndex = () => {
    const index = cartItems.findIndex(
      (item) => item.productId === product.productId
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
    const handleProduct = () => {
      const currentProd = items.find((item) => item.id === product.productId);
      currentProd && setCurrentItem(currentProd);
    };
    handleProduct();
  }, [product]);

  return (
    <>
      <Div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '15%',
            backgroundColor: '#fff',
            flex: '1 0 auto',
            padding: '5px',
            paddingTop: '20px',
            borderRadius: '5px',
          }}
        >
          <Img src={currentItem?.picture} alt="picture logo" />
          <Span
            onClick={() => {
              setRemoved(true);
              setTimeout(() => setRemoved(false), 5000);
            }}
          >
            <FiTrash2
              color="orange"
              size={20}
              style={{
                fontweight: '600',
                marginLeft: '5px',
                verticalAlign: 'middle',
              }}
            />
            Remove
          </Span>
        </div>
        <div
          style={{
            width: '60%',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '20px',
            fontWeight: '200',
            fontSize: '1em',
          }}
        >
          <div
            style={{
              fontWeight: '100',
              fontSize: '1.6em',
            }}
          >
            {currentItem?.item}
          </div>
          <span
            style={{
              fontWeight: '100',
              fontSize: '.8em',
            }}
          >
            In Stock
          </span>
          <span
            style={{
              fontWeight: '400',
              fontSize: '.8em',
            }}
          >
            JUMIA
            <span
              style={{
                color: 'rgba(255, 7, 7, 1)',
                fontWeight: '3oo',
              }}
            >
              <IoPaperPlane
                style={{
                  verticalAlign: '-1px',
                }}
              />
              EXPRESS
            </span>
          </span>
        </div>
        <div
          style={{
            width: '25%',
            backgroundColor: '#fff',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              color: '#000',
              marginRight: '5px',
              fontSize: '1.5em',
              fontWeight: '400',
            }}
          >
            {' '}
            {'\u20a6'} {currentItem?.price}
          </div>
          <div>
            <span
              style={{
                color: '#666565ff',
                marginRight: '5px',
                fontSize: '.9em',
                fontWeight: '300',
                textDecoration: 'line-through',
              }}
            >
              {'\u20a6'} {currentItem?.formerPrice}
            </span>
            <span
              style={{
                fontSize: '.8em',
                backgroundColor: '#ffcff2ff',
                padding: '4px',
                color: 'rgba(255, 155, 4, 1)',
                borderRadius: '5px',
              }}
            >
              {handleDiscount(currentItem?.formerPrice, currentItem?.price)}%
            </span>
            <Select>
              <Button
                style={{
                  backgroundColor: '#aaa',
                }}
                onClick={() => {
                  handleDecrement();
                  let i = itemIndex();
                  dispatch(decrement(i));
                }}
              >
                -
              </Button>
              <Span
                style={{
                  width: '50px',
                  color: '#000',
                  cursor: 'default',
                }}
              >
                {count}
              </Span>
              <Button
                onClick={() => {
                  handleIncrement();
                  let i = itemIndex();
                  dispatch(increment(i));
                }}
              >
                +
              </Button>
            </Select>
          </div>
        </div>
      </Div>
      <hr
        style={{
          width: '0px',
          backgroundColor: '#fff',
          margin: '0px',
        }}
      />
      {removed && <Screen screen={'removed'} />}
    </>
  );
};

export default CartItemProduct;

import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeItem } from '../cartSlice.js';

const CartButton = styled.div`
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
  position: relative;

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
  height: 60px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  position: fixed;
  top: 35%;
  left: 30%;
  background-color: #fff;
  width: 550px;
  padding: 15px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 0.9em;
  opacity: 1;
  border-radius: 5px;
`;

const H2 = styled.h2`
  margin: 0px;
  font-weight: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
`;

const RemoveButton = ({ onSetRemove, onRemove, index }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  useEffect(() => {
    ref.current.style.backgroundColor = 'rgba(83, 83, 83, 0.4)';
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        left: '0%',
        zIndex: '7000000000000000000',
        top: '0px',
        width: '100vw',
        height: '99vh',
      }}
    >
      <Div>
        <H2>
          Remove from cart
          <FaTimes
            style={{
              verticalAlign: 'middle',
              cursor: 'pointer',
            }}
            onClick={() => {
              onSetRemove(false);
              document.body.style.overflow = 'scroll';
            }}
          />
        </H2>
        <p
          style={{
            textAlign: 'left',
            fontWeight: '100',
            fontsize: '.9em',
          }}
        >
          Do you want to remove this item from cart?
        </p>
        <CartDiv>
          <CartButton
            onClick={() => {
              onRemove(true);
              onSetRemove(false);
              document.body.style.overflow = '';
              setTimeout(() => {
                onRemove(false);
                dispatch(removeItem(index.current));
              }, 900);
            }}
          >
            <FiTrash2
              color="#fff"
              size={20}
              style={{
                fontweight: '600',
                marginLeft: '5px',
                verticalAlign: 'middle',
                position: 'absolute',
                left: '10px',
              }}
            />
            Remove Item
          </CartButton>
        </CartDiv>
      </Div>
    </div>
  );
};

export default RemoveButton;

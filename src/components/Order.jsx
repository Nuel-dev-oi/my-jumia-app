import React, { useEffect } from 'react';
import { useRef } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { removeAll } from '../cartSlice.js';
import { useDispatch } from 'react-redux';

const OuterDiv = styled.div`
  position: absolute;
  left: 0%;
  z-index: 7000000000000000000;
  top: 0px;
  width: 100vw;
  height: 200vh;
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
  z-index: 7000000000000000000;

  @media (max-width: 700px) {
    left: 0%;
    width: 95vw;
    margin-left: 10px;
    top: 40%;
  }
`;

const H2 = styled.h2``;

const Order = ({ onSetOrder }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  useEffect(() => {
    ref.current.style.backgroundColor = 'rgba(119, 116, 116, 0.4)';
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <OuterDiv ref={ref}>
      <Div>
        <H2>
          <FaTimes
            style={{
              verticalAlign: 'middle',
              cursor: 'pointer',
              position: 'absolute',
              right: '10px',
              top: '5px',
            }}
            onClick={() => {
              document.body.style.overflow = 'scroll';
              onSetOrder(false);
              dispatch(removeAll());
            }}
          />
        </H2>
        <p
          style={{
            fontWeight: '100',
            fontSize: '1.2em',
          }}
        >
          <FaCheckCircle color="green" /> Order Succesfully Placed
        </p>
      </Div>
    </OuterDiv>
  );
};

export default Order;

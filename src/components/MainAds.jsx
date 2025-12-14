import React from 'react';
import styled, { keyframes } from 'styled-components';
import adImage from '../assets/ads_img.png';
import logo from '../assets/jumia-white.svg';
import SpanButton from './SpanButton.jsx';

const rotateZ = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

const Div = styled.div`
  height: 65vh;
  width: 100%;
  background-color: orange;
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: span 1;
  background-image: url(${adImage});
  background-repeat: no-repeat;
  background-size: 65% 97%;
  background-position: 100% 0%;
  background-blend-mode: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 40px;
  position: relative;
`;

const InnerSpan = styled.span`
  display: inline-block;
  font-size: 3rem;
  width: 20%;
  height: 35%;
  margin: 20px;
  white-space: nowrap;
  line-height: 0.8;
  margin-top: 5%;
`;

const Img = styled.img`
  width: 45px;
  vertical-align: middle;
  height: 45px;
  margin: -5px;
  margin-top: -15px;

  animation: ${rotateZ} 3s ease-in-out infinite;
`;

const FixedDiv = styled.div`
  width: 20%;
  height: 10%;

  position: absolute;
  bottom: 0px;
  left: 35%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  span {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: gray;
    cursor: pointer;
  }

  .orange {
    background-color: orange;
  }
`;

const MainAds = () => {
  return (
    <Div>
      <InnerSpan
        style={{
          backgroundColor: 'orange',
          backgroundBlendMode: 'difference',
          color: '#fff',
          textShadow: '0px 0px 2px',
        }}
      >
        H<Img src={logo} alt="logo" />
        LIDAY
        <br />
        <span
          style={{
            display: 'inline-block',
            marginTop: '-40px',
            borderBottom: '3px solid #fff',
            paddingBottom: '5px',
            width: '90%',
          }}
        >
          SALE
        </span>
      </InnerSpan>
      <span
        style={{
          margin: '20px',
          color: '#fff',
          fontSize: '1.5rem',
          fontWeight: '400',
          marginTop: '-61px',
          width: '60%',
        }}
      >
        02-28 DEC
      </span>
      <span
        style={{
          display: 'inline-block',
          width: '30%',
          marginLeft: '20px',
          height: 'max-content',
          borderRadius: '9px',
          backgroundColor: '#ff0000',
          color: '#fff',
          fontSize: '.8rem',
        }}
      >
        <span
          style={{
            display: 'flex',
            borderRadius: '9px',
            padding: '5px',
            border: '1px dashed #fff',
            width: '97%',
            margin: '2px',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {'up to '.toUpperCase()}
          <strong
            style={{
              fontSize: '1.8rem',
              lineHeight: '.8',
              marginLeft: '-20px',
            }}
          >
            65% off
          </strong>
        </span>
      </span>
      <span
        style={{
          margin: '20px',
          color: '#fff',
          fontWeight: '400',
          marginTop: '50px',
          textShadow: '0px 0px 2px',
        }}
      >
        {`T&Cs Apply`}
      </span>

      <FixedDiv>
        <SpanButton />
      </FixedDiv>
    </Div>
  );
};

export default MainAds;

import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import adImage from '../assets/ads_img.png';
import logo from '../assets/jumia-white.svg';
import SpanButton from './SpanButton.jsx';
import img_1 from '../assets/img_1.png';
import img_2 from '../assets/img_2.png';
import img_3 from '../assets/img_3.png';
import img_4 from '../assets/img_4.png';
import img_5 from '../assets/img_5.png';

const IMAGES = [adImage, img_1, img_2, img_3, img_4, img_5];

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

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 40px;
  position: relative;
  transition: opacity 0.6s ease-in-out;
  opacity: 1;
`;

const PicDiv = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 0%;
  background-blend-mode: normal;
  background-image: ${adImage};
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
  const number = useRef(0);
  const ref = useRef(null);
  const interval = useRef(null);
  const [num, setNum] = React.useState(null);
  const [i, setI] = React.useState(null);
  const onSetNum = (n) => {
    setNum(n);
  };

  useEffect(() => {
    function handleSlideShow() {
      const el = ref.current;
      if (!el) return;

      if (num !== null) {
        number.current = num;
        el.style.backgroundImage = `url(${IMAGES[num]})`;

        if (interval.current) {
          clearInterval(interval.current);
          interval.current = null;
        }

        setNum(null);

        interval.current = setInterval(() => {
          el.style.opacity = 0.9;

          setTimeout(() => {
            el.style.backgroundImage = `url(${IMAGES[number.current]})`;

            number.current =
              number.current >= IMAGES.length - 1 ? 0 : number.current + 1;
            el.style.opacity = 1;
          }, 600);
        }, 2500);

        return () => clearInterval(interval.current);
      }

      interval.current = setInterval(() => {
        el.style.opacity = 0.9;

        setTimeout(() => {
          el.style.backgroundImage = `url(${IMAGES[number.current]})`;
          setI(number.current);
          number.current =
            number.current >= IMAGES.length - 1 ? 0 : number.current + 1;

          el.style.opacity = 1;
        }, 600);
      }, 2500);
    }

    handleSlideShow();

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, [num]);

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
      <PicDiv
        style={{
          position: 'absolute',
          width: '445px',
          height: '99%',
          top: '0%',
          left: '35%',
        }}
        ref={ref}
      ></PicDiv>
      <FixedDiv>
        <SpanButton onsetNum={onSetNum} number={i} />
      </FixedDiv>
    </Div>
  );
};

export default MainAds;

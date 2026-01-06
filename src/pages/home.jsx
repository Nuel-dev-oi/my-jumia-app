import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import styled from 'styled-components';
import FlexDiv from '../components/FlexDiv.jsx';
import SlideDiv from '../components/SlideDiv.jsx';
import awoof from '../assets/awoof.png';
import upto from '../assets/up_to.png';
import more from '../assets/more.png';
import offer from '../assets/offer.png';
import grocery from '../assets/grocery.png';
import secure from '../assets/secure.png';
import deals from '../assets/deals.png';
import toy from '../assets/toy.png';
import testing from '../assets/testing.png';
import FlashSale from '../components/FlashSale.jsx';
import Item from '../components/Item.jsx';
import itemList from '../scripts/itemList.js';
import products from '../scripts/dataList.js';
import sellers from '../scripts/dataSet.js';
import sponsors from '../scripts/sponsoredList.js';
import { useNavigate } from 'react-router-dom';

const images = [awoof, upto, more, offer, grocery, secure, deals, toy, testing];

const items = [
  'Awoof Deals',
  'Up to 80% Off',
  'Kids, Baby And More',
  'Unbeatable Offers',
  'Groceries',
  'Send Packages Securely',
  'Deals Reloaded',
  'Toys & Games',
  'testing',
];

const OuterDiv = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
  background-color: #fff;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  box-shadow: inset 0px 0px 7px 1px #d0cbcbff;
  position: relative;

  @media (max-width: 700px) {
    overflow-x: scroll;
    margin-block: 15px;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

const TransparentDiv = styled.div`
  width: 100%;
  height: 10px;
  background-color: transparent;
`;

const ParentFlexDiv = styled.div`
  width: 92%;
  flex: 0 0 auto;
  display: flex;
  position: relative;
`;

const Home = () => {
  const navigate = useNavigate();
  const [loggedIn, _] = useState(
    JSON.parse(localStorage.getItem('loggedIn')) || false
  );
  const [width, setWidth] = useState(null);
  const [leftX, setleftX] = useState(null);
  const [rightX, setRightX] = useState(null);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const innerRef = ref.current.getBoundingClientRect().width;
    setWidth(innerRef);
  }, [width]);

  useEffect(() => {
    const element = ref.current.firstChild.nextSibling.firstChild;
    const lastElem = ref.current.firstChild.nextSibling.lastChild;
    const handleLeft = () => {
      const left = element.getBoundingClientRect().left;
      setleftX(left);
      const right = lastElem.getBoundingClientRect().right;
      setRightX(right);
    };
    handleLeft();
    const timer = setInterval(handleLeft, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!loggedIn) {
      navigate('/holiday_sales', { replace: true });
    }
  }, [navigate, loggedIn]);

  return (
    <>
      <OuterDiv
        ref={ref}
        style={{
          marginLeft: '2px',
        }}
      >
        <SlideDiv width={width} edge="left" leftX={leftX} rightX={rightX} />

        <ParentFlexDiv
          className="option"
          style={{
            marginRight: '2px',
          }}
        >
          {[...items].map((item, i) => {
            if (images[i]) {
              let img = images[i];
              return (
                <FlexDiv
                  key={i}
                  innerRef={width}
                  para={item}
                  image={<Img src={img} />}
                />
              );
            }
          })}
        </ParentFlexDiv>

        <SlideDiv
          style={{
            transform: 'rotateZ(180deg)',
          }}
          width={width}
          edge="right"
          leftX={leftX}
          rightX={rightX}
        />
      </OuterDiv>

      <TransparentDiv />

      <FlashSale
        timer={{
          hour: 1,
          minute: 2,
          second: 59,
        }}
        products={products}
        name="Flash Sales"
        progress={true}
        see={true}
      />

      <TransparentDiv />

      <Item
        items={itemList}
        flag={false}
        style={{
          height: `${window.innerWidth <= 700 ? '280px' : `${280 * 2}px`}`,
          flexWrap: `${window.innerWidth <= 700 ? 'nowrap' : 'wrap'}`,
          justifyContent: 'space-around',
        }}
      />

      <TransparentDiv />

      <FlashSale
        products={sellers}
        name="Top Sellers"
        style={{
          backgroundColor: 'orangered',
        }}
        see={true}
      />

      <TransparentDiv />

      <FlashSale
        products={sponsors}
        name="Sponsored Products"
        style={{
          backgroundColor: '#fff',
        }}
        color={{
          color: '#000',
        }}
        see={true}
      />
    </>
  );
};

export default Home;

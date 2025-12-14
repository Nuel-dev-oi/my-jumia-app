import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/jumia.svg?url';
import MenuList from './MenuList';
import FormSearch from './Form';

const icons = ['user', 'help', 'cart'];
const data = ['Hi, Emmanuel', 'Help', 'Cart'];

const Img = styled.img`
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-inline-start: -2px;
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Div = styled.div`
  background-color: #fff;
  font-size: 0.8rem;
  color: orange;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 2px 1px rgb(200, 200, 200);
  z-index: 10;
  width: 100%;
`;

const HeadingOne = styled.h1`
  color: #000;
  padding-left: 2%;
  white-space: nowrap;
  font-family: 'Oxanium', sans-serif;
`;

const ThirdHeader = ({ logoName }) => {
  const [position, setPosition] = useState({
    position: 'static',
    top: '0',
  });

  useEffect(() => {
    $(() => {
      $(window).on('scroll', () => {
        let firstHeader = $('.firstHeader');
        let vectY = firstHeader.get(0).getBoundingClientRect().y;
        if (window.innerWidth >= 701) {
          //console.log(vectY);
          if (vectY <= -92) {
            setPosition({
              position: 'fixed',
              top: '0',
            });
          } else {
            setPosition({
              position: 'static',
            });
          }
        } else {
          //console.log(vectY);
          if (vectY <= -50) {
            setPosition({
              position: 'fixed',
              top: '0',
            });
          } else {
            setPosition({
              position: 'static',
            });
          }
        }
      });
    });
  });

  return (
    <Div
      className="thirdHeader"
      style={{
        position: position?.position,
        top: position?.top,
        zIndex: '100000',
      }}
    >
      <HeadingOne>
        {`${logoName}`.toUpperCase()}
        <Img src={logo} alt={`${logoName}'s name`} />
      </HeadingOne>
      <FormSearch tag={true} />
      {data.map((item, i) => (
        <MenuList index={i} key={i} content={item} icon={icons[i]} />
      ))}
    </Div>
  );
};

export default ThirdHeader;

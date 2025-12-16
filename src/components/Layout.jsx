import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import SubAds from './SubAds.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import styled from 'styled-components';
import layoutImg from '../assets/layout_img-bg.png';
import logo from '../assets/jumia-white.svg';
import FlickAds from './FLickAds.jsx';
import CallOrder from './CallOrder.jsx';
import MainAds from './MainAds.jsx';
import Appliance from '../pages/appliance.jsx';
import Phones from '../pages/phonesTablet.jsx';
import Health from '../pages/healthBeauty.jsx';
import Office from '../pages/homeOffice.jsx';
import Electronics from '../pages/electronics.jsx';
import Fashion from '../pages/fashion.jsx';
import Super from '../pages/superMarket.jsx';
import Computer from '../pages/computer.jsx';
import BabyProduct from '../pages/babyProduct.jsx';
import Gaming from '../pages/gaming.jsx';
import Musical from '../pages/musical.jsx';
import Other from '../pages/others.jsx';

const Main = styled.main`
  width: 100%;
  height: max-content;
  background-color: transparent;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: /*5vw 20vw 69vw 5vw*/ 64px 256px 883.2px 64px;
  grid-template-rows: 30vh max-content 40vh;
  background-image: url(${layoutImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 1270px;
`;
const Pages = [
  () => <Appliance />,
  () => <Phones />,
  () => <Health />,
  () => <Office />,
  () => <Electronics />,
  () => <Fashion />,
  () => <Super />,
  () => <Computer />,
  () => <BabyProduct />,
  () => <Gaming />,
  () => <Musical />,
  () => <Other />,
];

const strings = [
  'appliances',
  'phones_tablets',
  'health_beauty',
  'home_office',
  'electronics',
  'fashion',
  'supermarket',
  'computing',
  'baby_products',
  'gaming',
  'musical_instrumrnts',
  'other_categories',
];

const Layout = ({ children, logoName }) => {
  const [isSmall, setIsSmall] = useState(true);
  const [_, setWidth] = useState(window.innerWidth);
  const [render, setRender] = useState();
  const location = useLocation();

  const displayLayout =
    location.pathname === '/' || location.pathname === '/about';

  useLayoutEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w > 700) {
        setIsSmall(false);
      } else {
        setIsSmall(true);
      }

      setWidth(w);
    };

    // Run immediately
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []); // <— run only once

  useEffect(() => {
    const handlePages = () => {
      const index = strings.filter((item) => {
        const url = new URL(window.location);
        const regExp = new RegExp(`^/${item}$`);
        return regExp.test(url.pathname) === true;
      });
      let i = strings.indexOf(index[0]);
      setRender(Pages[i]);
    };
    handlePages();
  }, [location.pathname]);

  return isSmall ? (
    <>
      <Header logoName={'Jumia'} />
      <Div>
        <Navigation />
        <Main>{children}</Main>
      </Div>
      <Footer />
    </>
  ) : (
    <LayoutGrid>
      <Header
        logoName={'Jumia'}
        style={{
          gridRowStart: '1',
          gridRowEnd: '2',
          gridColumnStart: '1',
          gridColumnEnd: '5',
          alignSelf: 'stretch',
        }}
      />
      {displayLayout ? (
        <Div
          style={{
            gridRowStart: '2',
            gridRowEnd: '3',
            gridColumnStart: '2',
            gridColumnEnd: '4',
            display: 'grid',
            gridTemplateColumns: '0.3fr 1.1fr 0.35fr',
            gridTemplateRows: '1fr .05fr 1fr max-content',
            gap: '10px',
          }}
        >
          <Navigation
            style={{
              gridRowStart: '1',
              gridRowEnd: '4',
              gridColumnStart: '1',
              gridColumnEnd: '2',
            }}
          />

          <MainAds />

          <CallOrder />

          <SubAds
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'orange',
            }}
          >
            <span
              style={{
                fontSize: '2.5rem',
                color: '#fff',
                fontWeight: 'bold',
                marginTop: '10px',
              }}
            >
              {logoName.toUpperCase()}
              <img
                src={logo}
                alt="logo"
                style={{
                  width: '40px',
                  height: '40px',
                  verticalAlign: 'middle',
                  backgroundColor: 'orange',
                  marginTop: '-5px',
                }}
              />
            </span>{' '}
            <span
              style={{
                fontSize: '2.8rem',
                fontWeight: '600',
                color: '#fff',
                marginTop: '-86px',
                display: 'inline-block',
                textAlign: 'left',
                marginLeft: '-30px',
              }}
            >
              {'\nFORCE'}
            </span>
            <FlickAds />
          </SubAds>

          <Main
            style={{
              gridRowStart: '4',
              gridRowEnd: '5',
              gridColumnStart: '1',
              gridColumnEnd: '4',
            }}
          >
            <div>{children}</div>
          </Main>
        </Div>
      ) : (
        render
      )}
      <Footer
        style={{
          gridRowStart: '3',
          gridRowEnd: '4',
          gridColumnStart: '1',
          gridColumnEnd: '5',
        }}
      />
    </LayoutGrid>
  );
};

export default Layout;

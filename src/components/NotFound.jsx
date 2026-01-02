import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import notfouund from '../assets/404.png';
import { Link, useLocation } from 'react-router-dom';

const Div = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  height: 80vh;
  background-color: #fff;
  grid-column-start: 2;
  grid-column-end: span 2;
  background-image: url(${notfouund});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  color: orangered;
`;

const NotFound = () => {
  const location = useLocation();
  const [see, setSee] = useState('block');
  useEffect(() => {
    function setSeen() {
      if (location.pathname === '/sign_in') setSee('none');
    }
    setSeen();
  }, [location.pathname]);
  return (
    <Div
      style={{
        display: `${see}`,
      }}
    >
      Sorry, Page Not Found!!
      <p
        style={{
          color: 'red',
        }}
      >
        Click here to visit the <Link to="/">Home Page</Link>
      </p>
    </Div>
  );
};

export default NotFound;

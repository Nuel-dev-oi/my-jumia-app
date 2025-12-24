import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';

const Div = Styled.div`
    font-size: 2rem;
  font-weight: bold;
  text-align: center;
  height: 100vh;
  background-color: #fff;
  grid-column-start: 2;
  grid-column-end: span 2;
`;

const HolidaySales = () => {
  const navigate = useNavigate();
  const [loggedIn, _] = useState(
    JSON.parse(localStorage.getItem('loggedIn')) || false
  );

  useEffect(() => {
    if (loggedIn) {
      navigate('/', { replace: true });
    }
  }, [navigate, loggedIn]);

  return <Div>This is the holiday Sales Page.</Div>;
};

export default HolidaySales;

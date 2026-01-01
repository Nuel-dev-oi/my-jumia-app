import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import prods from '../scripts/sponsoredList';
import FlashSale from './FlashSale';

const Div = styled.div`
  background-color: #fff;
  font-size: 0.8em;
  font-weight: 400;
  padding-block: 5px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`;

const NavPage = ({ see }) => {
  const location = useLocation();
  const [title, setTitle] = useState();

  useEffect(() => {
    console.log(location.pathname.substring(1));
    function handlePathName() {
      const headerName = location.pathname.substring(1);
      const header = headerName
        .split('')
        .map((letter, i, arr) => {
          if (i === 0) {
            return letter.toUpperCase();
          } else if (arr[i - 1] && arr[i - 1] === '_') {
            return letter.toUpperCase();
          } else if (letter === '_') {
            return ' ';
          } else {
            return letter;
          }
        })
        .join('');

      setTitle(header);
    }
    handlePathName();
  }, [location.pathname]);

  return (
    <Flex>
      <Div
        style={{
          marginTop: '-40px',
        }}
      >
        {title}
      </Div>
      <Div
        style={{
          fontSize: '.6em',
          backgroundColor: 'orangered',
          color: '#fff',
        }}
      >
        CALL TO ORDER 07071961353
      </Div>
      <div
        style={{
          marginTop: '-30px',
        }}
      >
        <FlashSale
          products={prods}
          name="Limited Stock Deals"
          style={{
            backgroundColor: 'orangered',
            fontSize: '.5em',
            fontWeight: '400',
          }}
          color={{
            color: '#000',
            fontSize: '15px',
          }}
          itemStyle={{
            fontSize: '16px',
          }}
          see={see}
        />
      </div>
    </Flex>
  );
};

export default NavPage;

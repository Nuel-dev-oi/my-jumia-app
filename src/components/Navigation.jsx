import React from 'react';
import styled from 'styled-components';
import data, { iconList } from '../scripts/navList.jsx';
import List from './List.jsx';

const Nav = styled.nav`
  width: 100%;
  height: 65vh;
  background-color: #fff;
  padding: 0px;
  display: flex;
  align-items: flex-start;
  color: #000;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Navigation = ({ style }) => {
  return (
    <Nav
      style={{
        ...style,
        borderRadius: '5px',
        boxShadow: '0px 0px 7px 1px orange',
      }}
    >
      <ul
        style={{
          padding: '0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'space-between',
          flex: '1 0 auto',
          width: '90%',
          height: '100%',
          margin: '0px',
          justifyContent: 'space-between',
        }}
      >
        {data.map((item, index) => {
          const Icon = iconList[index];
          return (
            <List key={index} item={item}>
              {Icon ? <Icon /> : null}
            </List>
          );
        })}
      </ul>
    </Nav>
  );
};

export default Navigation;

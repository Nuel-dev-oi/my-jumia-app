import React from 'react';
import styled from 'styled-components';
import data, { iconList } from '../../scripts/navList.jsx';
import List from '../List.jsx';
import { FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  width: 95%;
  height: 100vh;
  background-color: #fff;
  padding: 0px;
  display: flex;
  align-items: flex-start;
  position: fixed;
  z-index: 500;
  top: 0px;
`;

const Navigation = ({ style, onSetView }) => {
  return (
    <Nav
      style={{
        ...style,
        borderRadius: '5px',
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
      <FaTimes
        size={25}
        style={{
          cursor: 'pointer',
          color: '#000',
        }}
        onClick={() => {
          onSetView(false);
          document.body.style.overflow = 'scroll';
        }}
      />
    </Nav>
  );
};

export default Navigation;

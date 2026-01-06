import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Li = styled.li`
  list-style-type: none;
  flex: 0 1 auto;
  margin-left: 10px;
  font-size: 0.8em;
  font-weight: 100;
  font-family: 'Gruppo', san-serif;
  white-space: nowrap;
  color: #000;

  a {
    color: #000;
    text-decoration: none;

    @media (max-width: 700px) {
      color: #000;
    }

    &:hover {
      color: #ff6600;
      @media (max-width: 700px) {
        color: red;
      }
    }
  }
`;

const List = ({ item, children }) => {
  let link = item;
  let items = item.split('');
  let obj = {};
  for (let letter of items) {
    if (letter === ' ') {
      if (!('space' in obj)) {
        link = link.replace(/\s/, '_');
        obj['space'] = letter;
      } else {
        link = link.replace(/\s/, '');
      }
    }
    if (letter === '&') {
      link = link.replace(/&/g, '');
    }
  }

  return (
    <Li>
      <Link to={`/${link.toLowerCase()}`}>
        {children} {item}
      </Link>
    </Li>
  );
};

export default List;

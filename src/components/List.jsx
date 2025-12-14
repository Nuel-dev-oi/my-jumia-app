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

  a {
    color: #444444;
    text-decoration: none;

    &:hover {
      color: #ff6600;
    }
  }
`;

const List = ({ item, children }) => {
  return (
    <Li>
      <Link to={`/${item}`}>
        {children} {item}
      </Link>
    </Li>
  );
};

export default List;

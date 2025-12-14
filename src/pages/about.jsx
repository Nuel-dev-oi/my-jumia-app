import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  margin-inline: 12px;
  padding: 5px;
  width: 120px;
  border-radius: 5px;
  background-color: rgba(5, 5, 255, 0.6);
`;

const About = () => {
  let [value, setValue] = useState(0);
  return (
    <>
      <Button
        onClick={() => {
          setValue(++value);
        }}
      >
        Click to Increase value
      </Button>
      <Button
        onClick={() => {
          value ? setValue(--value) : value;
        }}
      >
        Click to Decrease value
      </Button>
      <p>This is the about Page: {value}</p>
    </>
  );
};

export default About;

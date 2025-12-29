import React, { useState } from 'react';
import { FaCheck, FaTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  width: 100vw;
  top: 0px;
  left: 0px;
  color: #fff;
  background-color: rgba(3, 212, 3, 1);
  height: 40px;
  font-size: 1.1em;
  font-weight: 400;
  z-index: 2000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Screen = ({ screen }) => {
  const [seen, setSeen] = useState(true);

  return (
    <>
      {seen ? (
        <Div>
          <FaCheck style={{ marginRight: '10px' }} />
          Product {screen} sucessfully
          <FaTimesCircle
            style={{
              marginLeft: '10px',
              cursor: 'pointer',
              position: 'absolute',
              right: '60px',
            }}
            onClick={() => setSeen(false)}
          />
        </Div>
      ) : null}
    </>
  );
};

export default Screen;

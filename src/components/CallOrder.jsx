import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaWarehouse, FaShippingFast } from 'react-icons/fa';

const Div = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

   @media(max-width: 700px) {
     flex-direction: row;
     background-color: orange;
     gap: 10px;
     background-color: orangered;
     color: #fff;
   }
`;

const Span = styled.span`
  display: inline-block;
  flex: 0 1 80%;
  flex-wrap: nowrap;
`;

const InnerSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;

   @media(max-width: 700px) {
   font-size: .85em;

  }
`;

const IconSpan = styled.span`
  width: 28px;
  height: 28px;
  border: 1px solid orange;
  border-radius: 100%;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 700px) {
    border: 1px solid orange;

  }
`;

const CallOrder = () => {
  return (
    <Div>
      <InnerSpan>
        <IconSpan>
          <FaPhone
            size={18}
            style={{
              transform: 'rotateZ(90deg)',
            }}
          />
        </IconSpan>
        <Span
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
          }}
        >
          {'Call to Order'.toUpperCase()}
          <span
            style={{
              flex: '0 1 100%',
              fontSize: '90%',
              whiteSpace: 'nowrap',
            }}
          >
            0700-600-0000, 0201888...
          </span>
        </Span>
      </InnerSpan>

      <InnerSpan>
        <IconSpan>
          <FaWarehouse size={18} />
        </IconSpan>
        <Span>Sell on Jumia</Span>
      </InnerSpan>

      <InnerSpan>
        <IconSpan
          style={{
            border: 'none',
          }}
        >
          <FaShippingFast size={18} />
        </IconSpan>
        <Span>Send Your Packages</Span>
      </InnerSpan>
    </Div>
  );
};

export default CallOrder;

import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
  overflow-y: hidden;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: center;
  flex: 0 0 auto;
  
  @media(max-width: 700px) {
    flex: 1 0 150px;
  }
`;

const InnerDiv = styled.div`
  height: 70%;
  width: 95%;
  margin: 5px;
  transition: all 0.5s linear;
  z-index: 10;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 1px 1px gray;
  }
`;
const Paragraph = styled.p`
  height: 25%;
  font-size: 0.8em;
  margin-left: 5px;
`;

const FlexDiv = ({ style, para, image, innerRef }) => {
  const width = innerRef || 0;

  return (
    <OuterDiv
      style={{
        ...style,
        width: `${width / 8}px`,
      }}
    >
      <InnerDiv>{image}</InnerDiv>
      <Paragraph>{para}</Paragraph>
    </OuterDiv>
  );
};

export default FlexDiv;

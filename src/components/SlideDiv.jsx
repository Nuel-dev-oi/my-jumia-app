import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const InnerDiv = styled.div`
  background-color: rgb(200 200 200);
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-weight: 400;
  font-size: 1.5rem;
  box-shadow: 0px 0px 2px 2px #e7dedeff;

  &:hover {
    background-color: rgb(150 150 150);
  }
`;

const OuterDiv = styled.div`
  width: 4%;
  /*border: 2px solid blue;*/
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  height: 213px;
  padding-top: 2%;
  box-shadow: 0px 4px 62px 32px #e4e1e1ff;
  z-index: 100;
  position: relative;
  background-color: #fff;
`;

const SlideDiv = ({ style, width, edge, leftX, rightX }) => {
  const ref = useRef();

  useEffect(() => {
    const current = ref.current;
    function handleClick() {
      let left;
      const parent = document.querySelector('.option');
      const computedLeft = getComputedStyle(parent).left;
      left = parseInt(computedLeft);
      if (rightX <= 1112.7 && edge === 'right') {
        return;
      }
      if (leftX >= 111 && edge === 'left') {
        return;
      }
      edge === 'right'
        ? (parent.style.left = left - width / 8 + 'px')
        : (parent.style.left = left + width / 8 + 'px');
    }

    ref.current.addEventListener('click', handleClick);

    return () => {
      current.removeEventListener('click', handleClick);
    };
  }, [edge, width, rightX, leftX]);

  return (
    <OuterDiv ref={ref}>
      <InnerDiv style={style}>{'\u2039'}</InnerDiv>
    </OuterDiv>
  );
};

export default SlideDiv;

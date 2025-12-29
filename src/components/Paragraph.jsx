import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TbFileDescription, TbListDetails } from 'react-icons/tb';
import { FiMessageSquare } from 'react-icons/fi';

const Para = styled.div`
  width: 100%;
  margin: 0px;
  height: 110px;
  font-size: 1.2em;
  box-shadow: 0px 1px 1px 1px #eee;

  &:hover {
    background-color: rgba(201, 199, 199, 1);
  }
`;

const Paragraph = ({ refer: { detail, specification, feedback } }) => {
  const [bgColor, setBgColor] = useState('#817c7cff');
  const [bgFColor, setBgFColor] = useState('#fff');
  const [bgSColor, setBgSColor] = useState('#fff');

  useEffect(() => {
    const handleScroll = () => {
      const detailY = detail.current.getBoundingClientRect().y;
      const specificationY = specification.current.getBoundingClientRect().y;
      const feedbackY = feedback.current.getBoundingClientRect().y;

      if (feedbackY <= 438.7) {
        setBgFColor('#817c7cff');
      } else {
        setBgFColor('#fff');
      }

      if (specificationY <= 87.5 && specificationY > -47.1 /*-225.7*/) {
        setBgSColor('#817c7cff');
      } else {
        setBgSColor('#fff');
      }

      if (detailY < -43.6) {
        setBgColor('#fff');
      } else {
        setBgColor('#817c7cff');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [detail, specification, feedback]);

  return (
    <>
      <Para
        style={{
          height: 'max-content',
          padding: '10px',
          fontSize: '.9em',
          backgroundColor: `${bgColor}`,
          borderRadius: '5px',
        }}
      >
        {' '}
        <TbFileDescription
          size={25}
          style={{
            verticalAlign: 'middle',
            marginRight: '20px',
          }}
        />
        Product details
      </Para>
      <Para
        style={{
          height: 'max-content',
          padding: '10px',
          fontSize: '.9em',
          borderRadius: '5px',
          backgroundColor: `${bgSColor}`,
        }}
      >
        {' '}
        <TbListDetails
          size={25}
          style={{
            verticalAlign: 'middle',
            marginRight: '20px',
          }}
        />
        Specifications
      </Para>
      <Para
        style={{
          height: 'max-content',
          padding: '10px',
          whiteSpace: 'nowrap',
          fontSize: '.9em',
          borderRadius: '5px',
          backgroundColor: `${bgFColor}`,
        }}
      >
        {' '}
        <FiMessageSquare
          size={25}
          style={{
            verticalAlign: 'middle',
            marginRight: '20px',
          }}
        />
        Verified Customer Feedback
      </Para>
    </>
  );
};

export default Paragraph;

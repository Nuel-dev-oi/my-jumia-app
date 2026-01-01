import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import flash from '../assets/flash-sale.svg';
import Item from './Item.jsx';
import { Link } from 'react-router-dom';

const Div = styled.div`
  font-size: 1.1rem;
  background-color: red;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 10px;
`;

const Img = styled.img`
  width: 45px;
  vertical-align: middle;
`;
const FlexItem = styled.div`
  color: #fff;
  cursor: pointer;
`;

const FlashSale = ({
  timer,
  products,
  name,
  style,
  progress,
  color,
  see,
  itemStyle,
}) => {
  const [second, setSecond] = useState(timer?.second);
  const [minute, setMinute] = useState(timer?.minute);
  const [hour, setHour] = useState(timer?.hour);

  useEffect(() => {
    const timer =
      hour === 0 && minute === 0 && second === 0
        ? null
        : setInterval(handleTimer, 1000);
    //console.log(hour, minute, second);
    function handleTimer() {
      setSecond(second - 1);
      if (second === 0 && minute != 0) {
        setMinute(minute - 1);
        setSecond(59);
      }
      if (minute === 0 && hour != 0) {
        setHour(hour - 1);
        setMinute(59);
      }
    }

    return () => clearInterval(timer);
  }, [hour, minute, second]);

  return (
    <>
      <Div
        style={{
          ...style,
        }}
      >
        <FlexItem>
          {timer && <Img src={flash} alt="Flash sale" />}
          <span
            style={{
              ...color,
            }}
          >
            {name}
          </span>
        </FlexItem>
        <FlexItem>
          {timer ? 'Time Left: ' : null}
          {timer ? (
            <span
              style={{
                fontWeight: '600',
              }}
              className="flash-sale"
            >
              {String(hour).length === 1 ? `0${hour}` : `${hour}`}h :{' '}
              {String(minute).length === 1 ? `0${minute}` : `${minute}`}m :{' '}
              {String(second).length === 1 ? `0${second}` : `${second}`}s
            </span>
          ) : null}
        </FlexItem>
        <FlexItem
          style={{
            ...color,
            fontSize: '.9em',
          }}
        >
          {!see ? (
            <Link
              to="/"
              style={{
                color: '#000',
                textDecoration: 'none',
              }}
            >
              See All
            </Link>
          ) : null}{' '}
          {!see ? '\u203A' : null}
        </FlexItem>
      </Div>
      <Item
        items={products}
        flag={true}
        progress={progress}
        itemStyle={itemStyle}
      />
    </>
  );
};

export default FlashSale;

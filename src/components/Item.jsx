import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  background-color: #fff;
  height: 280px;
  flex-direction: row;
  padding-inline: 5px;
`;

const Img = styled.img`
  width: 100%;
  height: 65%;
  /* border: 1px solid pink;*/
`;

const FlexItem = styled.div`
  width: calc(100% / 6);
  height: 280px;
  /*border: 1px solid blue;*/
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  position: relative;
  transition: transform 0.5s linear;

  &:hover {
    box-shadow: 0px -1px 10px 1px #c2babaff;
    transform: scale(1.001);
  }
`;

const ProgressBar = styled.progress`
  border: none;
  width: 100%;
  height: 8px;
  -webkit-appearance: none;

  appearance: none;

  &::-webkit-progress-bar {
    background-color: #b8b3b3ff;
    border-radius: 5px;
    margin-top: 0px;
  }

  &::-webkit-progress-value {
    background-color: rgba(255, 169, 31, 1);
    border-radius: 0px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &::-moz-webkit-bar {
    background-color: brown;
    border-radius: 0px;
  }
`;
const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const FloatDiv = styled.div`
  position: absolute;
  width: max-content;
  height: max-content;
  right: 14px;
  top: 2px;
  border-radius: 5px;
  background-color: #ffcff2ff;
  padding: 5px;
  color: rgba(255, 155, 4, 1);
`;

const Item = ({ items, style, flag, progress }) => {
  return (
    <FlexDiv
      style={{
        ...style,
      }}
    >
      {items.map((item, i) => {
        return (
          <FlexItem
            key={i}
            style={{
              width: `${flag ? 'calc(100% / 6)' : '250px'}`,
            }}
          >
            {flag ? <Img src={item.picture} /> : null}
            {!flag ? (
              <Img
                src={item.picture}
                style={{
                  height: '90%',
                }}
              />
            ) : null}
            <div
              style={{
                fontWeight: '200',
                whiteSpace: 'nowrap',
                fontSize: '.9rem',
                textAlign: 'center',
              }}
            >
              {item?.item}
            </div>

            <InnerDiv>
              <strong
                style={{
                  fontSize: '0.9em',
                  fontWeight: '400',
                }}
              >
                {flag ? '\u20A6' : null}
                {flag ? item?.price : null}
              </strong>
              <small
                style={{
                  color: '#cfcbcbff',
                  textDecoration: 'line-through',
                }}
              >
                {flag ? '\u20A6' : null}
                {flag ? item.formerPrice : null}
              </small>
            </InnerDiv>

            <InnerDiv>
              <small
                style={{
                  color: '#cfcbcbff',
                }}
              >
                {flag ? item?.value : null}{' '}
                {flag && progress
                  ? item?.value === 0 || item?.value === 1
                    ? 'item left'
                    : 'items left'
                  : null}
              </small>
              {flag && progress ? (
                <ProgressBar max={item.max} value={item.value} />
              ) : null}
            </InnerDiv>
            {flag ? (
              <FloatDiv>
                {flag ? (
                  <item.discount
                    formerPrice={item?.formerPrice}
                    price={item?.price}
                  />
                ) : null}
                {`%`}
              </FloatDiv>
            ) : null}
          </FlexItem>
        );
      })}
    </FlexDiv>
  );
};

export default Item;

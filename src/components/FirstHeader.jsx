import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/jumia.svg';

const Img = styled.img`
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-inline-start: -2px;
  font-size: 1rem;
  //margin-bottom: 5px;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: max-content;
  margin-block: 0px;
`;

const Span = styled.span`
  white-space: pre;
  /*border: 2px solid blue;*/
  vertical-align: middle;
  /*margin-right: 20px;*/
  flex: 0 0 auto;
  height: 50px;
  font-size: 1.1rem;
  margin-block: 0px;
  /* margin-left: 5%/*20px*/
  display: flex;
  @media (max-width: 700px) {
    font-size: 0.7em;
    /*border: 2px solid red;*/
    margin-inline-start: 0px;
  }
`;

const FirstHeader = ({ logoName }) => {
  const [isSmall, setIsSmall] = useState(true);
  const [display, setDisplay] = useState('inline-block');
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w > 700) {
        setWidth(w);
        setIsSmall(false);
        setDisplay('inline-block');
      } else {
        setIsSmall(true);
        setDisplay('none');
        setWidth(w);
      }
    };

    // Run immediately
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []); // ← run once

  return (
    <div
      className="firstHeader"
      style={{
        backgroundColor: '#000',
        color: '#fff',
        gridRowStart: '1',
        gridRowEnd: '2',
        gridColumnStart: '1',
        gridColumnEnd: '2',
        width: '100%',
      }}
    >
      <Paragraph>
        {
          // isSmall &&
          <span
            style={{
              whiteSpace: 'nowrap',
              display: 'inline-block',
              width: '15%',
              marginInlineStart: '2%',
            }}
          >
            {logoName.toUpperCase()}
            <Img
              src={logo}
              type="image/svg+xml"
              alt={`${logoName} logo`}
            />{' '}
          </span>
        }

        {
          //isSmall &&
          <>
            <Span
              style={
                {
                  //marginLeft: "2%"//'-80px',
                }
              }
            >
              BLACK {'\n'}
              FRIDAY
            </Span>
            <Span
              style={{
                // marginInlineStart: "5%",//'-10px',
                border: 'none',
              }}
            >
              Do Pass {'\n'}
              Yourself
            </Span>
          </>
        }

        {
          //!isSmall &&

          <>
            <Span
              style={{
                backgroundColor: 'white',
                color: '#000',
                height: '50px',
                alignItems: 'center',
                textAlign: 'center',
                width: '20%',
                border: 'none',
                fontSize: '1.6rem',
                justifyContent: 'center',
                fontWeight: '900',
                display: `${display}`,
                paddingTop: '5px',
              }}
            >
              LIVE NOW
            </Span>
            <Span
              style={{
                width: '30%',
                height: 'max-content',
                padding: '5px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                border: 'none',
                alignItems: 'center',
              }}
            >
              <Img
                src={logo}
                alt="ad"
                style={{
                  width: '10%/*100px*/',
                  height: '50px',
                  //verticalAlign: 'middle',
                  flex: '0 1 100px',
                  backgroundColor: 'brown',
                  display: `${display}`,
                }}
              />
              <Span
                style={{
                  border: 'none',
                  fontSize: '50%',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  color: '#000',
                  flex: '0 1 100px',
                  height: '50px',
                  flexDirection: 'column',
                  //display: 'flex',
                  display: `${display}`,
                  width: '10%',
                }}
              >
                <span
                  style={{
                    fontSize: '.6rem',
                    display: `${display}`,
                  }}
                >
                  call for Deals
                </span>{' '}
                {'\n'}
                0700 600 0000
              </Span>
            </Span>
          </>
        }
      </Paragraph>
    </div>
  );
};

export default FirstHeader;

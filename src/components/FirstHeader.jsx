import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/jumia.svg';

const Img = styled.img`
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-inline-start: -2px;
  font-size: 1rem;
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
  position: relative;
`;

const Span = styled.span`
  white-space: pre;
  vertical-align: middle;
  flex: 0 0 auto;
  height: 50px;
  font-size: 1.1rem;
  display: flex;
  position: relative;

  @media (max-width: 700px) {
    font-size: 0.7em;
    margin-inline-start: 0px;
  }
`;

const FirstHeader = ({ logoName }) => {
  const rafId = useRef(null);
  const boxRef = useRef(null);
  const position = useRef(0);
  const position_p = useRef(0);
  const bibRef = useRef(null);
  const colorRef = useRef(null);
  const phase = useRef('moving'); // "moving" or "scaling"
  const scaleTime = useRef(0);
  const boxPRef = useRef(null);
  const MOVE_P = useRef(false); // Set to true to enable move animation
  const MOVE_Phase = useRef('left'); // "left" or "right"
  const scaleBibTime = useRef(0);
  const colorTime = useRef(0);

  useEffect(() => {
    const COLORS = [
      '#ff0000', // red
      '#ff9900', // orange
      '#00cc66', // green
      '#0099ff', // blue
      '#9933ff', // purple
    ];

    const box = boxRef.current;
    const box_p = boxPRef.current;
    const box_bib = bibRef.current;
    const STOP_AT = -120;
    const STOP_AT_P = -160;

    const SCALE_AMOUNT = 0.1; // how much it grows/shrinks
    const SCALE_SPEED = 0.05; // how fast it pulses

    const animate = () => {
      if (phase.current === 'moving') {
        position.current -= 0.5;

        if (position.current <= STOP_AT) {
          position.current = STOP_AT;
          MOVE_P.current = true;
          phase.current = 'scaling';
        }

        box.style.transform = `translateX(${position.current}px)`;
      }

      if (phase.current === 'scaling') {
        scaleTime.current += SCALE_SPEED;

        const scale = 1 + Math.sin(scaleTime.current) * SCALE_AMOUNT;

        box.style.transform = `translateX(${STOP_AT}px) scale(${scale})`;
      }

      if (MOVE_P.current) {
        if (MOVE_Phase.current === 'left') {
          position_p.current -= 0.8;
        }

        if (position_p.current <= STOP_AT_P) {
          position_p.current = STOP_AT_P;
          MOVE_Phase.current = 'right';
        }

        if (MOVE_Phase.current === 'right') {
          position_p.current += 0.8;
        }
        if (position_p.current >= 15) {
          position_p.current = 15;
          MOVE_Phase.current = 'left';
        }

        box_p.style.transform = `translateX(${position_p.current}px)`;
      }

      scaleBibTime.current += SCALE_SPEED;

      const scaleBib = 1 + Math.sin(scaleBibTime.current) * SCALE_AMOUNT;
      box_bib.style.transform = `scale(${scaleBib})`;

      // ---- COLOR ANIMATION ----
      if (colorRef.current) {
        colorTime.current += 0.02;

        const i = Math.floor(colorTime.current) % COLORS.length;
        const next = (i + 1) % COLORS.length;

        const t = colorTime.current % 1; // 0 → 1

        const lerp = (a, b, t) => Math.round(a + (b - a) * t);

        const c1 = COLORS[i].match(/\w\w/g).map((v) => parseInt(v, 16));
        const c2 = COLORS[next].match(/\w\w/g).map((v) => parseInt(v, 16));

        const r = lerp(c1[0], c2[0], t);
        const g = lerp(c1[1], c2[1], t);
        const b = lerp(c1[2], c2[2], t);

        colorRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const [display, setDisplay] = useState('inline-block');
  useLayoutEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w > 700) {
        setDisplay('inline-block');
      } else {
        setDisplay('none');
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
        <span
          style={{
            whiteSpace: 'nowrap',
            display: 'inline-block',
            width: '15%',
          }}
        >
          {logoName.toUpperCase()}
          <Img src={logo} type="image/svg+xml" alt={`${logoName} logo`} />{' '}
        </span>
        <Span ref={boxRef}>
          BLACK {'\n'}
          FRIDAY
        </Span>

        <Span ref={boxPRef}>
          Do Pass {'\n'}
          Yourself
        </Span>
        <Span
          style={{
            backgroundColor: 'white',
            color: '#000',
            height: '50px',
            alignItems: 'center',
            textAlign: 'center',
            width: '20%',
            fontSize: '1.6rem',
            justifyContent: 'center',
            fontWeight: '900',
            display: `${display}`,
            paddingTop: '5px',
            transform: 'translateX(-25px)',
          }}
        >
          <span
            ref={bibRef}
            style={{
              width: 'max-content',
              display: 'inline-block',
              transformOrigin: 'center',
            }}
          >
            LIVE NOW
          </span>
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
              width: '10%',
              height: '50px',
              flex: '0 1 100px',
              backgroundColor: 'brown',
              display: `${display}`,
            }}
          />
          <Span
            style={{
              border: 'none',
              fontSize: '55%',
              textAlign: 'center',
              backgroundColor: '#fff',
              color: '#fff',
              flex: '0 1 100px',
              height: '50px',
              flexDirection: 'column',
              display: `${display}`,
              width: '10%',
              transform: 'translateX(-70px)',
            }}
            ref={colorRef}
          >
            <span
              style={{
                fontSize: '.65rem',
                display: `${display}`,
                marginBlockStart: '10px',
              }}
            >
              call for Deals
            </span>{' '}
            {'\n'}
            0700 600 0000
          </Span>
        </Span>
      </Paragraph>
    </div>
  );
};

export default FirstHeader;

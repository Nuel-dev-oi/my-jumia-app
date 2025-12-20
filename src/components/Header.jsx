import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import FirstHeader from './FirstHeader';
import SecondHeader from './SecondHeader';
import ThirdHeader from './ThirdHeader';
import AltThirdHeader from './AltThirdHeader';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  height: max-content;
  width: 100%;
`;

function Header({ logoName, style }) {
  const [isSmall, setIsSmall] = useState(false);
  const [_, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsSmall(w <= 700);
      setWidth(w);
    };

    // Run immediately on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []); // <-- MUST BE []

  return (
    <div
      style={{
        ...style,
      }}
      className="header"
    >
      <HeaderContainer>
        <FirstHeader logoName={logoName} />
        <SecondHeader logoName={logoName} />
        {isSmall ? (
          <AltThirdHeader logoName={logoName} />
        ) : (
          <ThirdHeader logoName={logoName} />
        )}
      </HeaderContainer>
    </div>
  );
}

export default Header;

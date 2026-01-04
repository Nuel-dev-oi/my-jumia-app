import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import FirstHeader from './FirstHeader';
import SecondHeader from './SecondHeader';
import ThirdHeader from './ThirdHeader';
import AltThirdHeader from './AltThirdHeader';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 101%;
`;

function Header({ logoName, style }) {
  const [isSmall, setIsSmall] = useState(false);


  useLayoutEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsSmall(w <= 700);
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

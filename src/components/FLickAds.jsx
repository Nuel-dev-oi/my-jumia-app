import React, { useEffect } from 'react';

const FlickAds = () => {
  useEffect(() => {
    const span = document.querySelector('.ads');

    const handleEffect = () => {
      if (span.classList.contains('show')) {
        span.style.display = 'inline-block';
        span.classList.remove('show');
        span.classList.add('hide');
      } else if (span.classList.contains('hide')) {
        span.style.display = 'none';
        span.classList.remove('hide');
        span.classList.add('show');
      }
    };

    handleEffect();

    const interval = setInterval(handleEffect, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="ads show"
      style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#fff',
        marginTop: '-15px',
      }}
    >
      {'\nJoin Now'.toUpperCase()}
    </span>
  );
};

export default FlickAds;

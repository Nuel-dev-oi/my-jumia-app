import React, { useEffect } from 'react';

const SpanButton = () => {
  function handleClick(evt) {
    const spans = document.querySelectorAll('.transparent');
    let span = Array.from(spans).filter((span) =>
      span.classList.contains('orange')
    );

    if (!span.length) {
      evt.target.classList.add('orange');
    } else {
      span.map((item) => {
        item.classList.remove('orange');
      });
      evt.target.classList.add('orange');
    }
  }

  useEffect(() => {
    const handleLoad = () => {
      const spans = document.querySelectorAll('.transparent');
      Array.from(spans).map((span, i) => {
        if (i === 0) {
          span.classList.add('orange');
        }
      });
    };
    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  });

  return (
    <>
      {new Array(6).fill(1).map((_, i) => {
        return (
          <span
            key={i}
            className="transparent"
            onClick={(e) => handleClick(e)}
          />
        );
      })}
    </>
  );
};

export default SpanButton;

import React from 'react';
import { MdStar } from 'react-icons/md';

const Ratings = ({ favorite }) => {
  const stars = new Array(5).fill('star');
  return (
    <>
      {stars.map((_, i) => {
        if (favorite - 1 === 4) {
          return (
            <MdStar
              key={i}
              size={25}
              color="gold"
              style={{
                filter: 'drop-shadow(0px 2px 1px gray)',
                verticalAlign: 'middle',
                marginTop: '-5px',
              }}
            />
          );
        } else {
          if (i <= favorite - 1) {
            return (
              <MdStar
                key={i}
                size={25}
                color="gold"
                style={{
                  filter: 'drop-shadow(0px 2px 1px gray)',
                  verticalAlign: 'middle',
                  marginTop: '-5px',
                }}
              />
            );
          }
          return (
            <MdStar
              key={i}
              size={25}
              color="gray"
              style={{
                filter: 'drop-shadow(0px 2px 1px gray)',
                verticalAlign: 'middle',
                marginTop: '-5px',
              }}
            />
          );
        }
      })}
    </>
  );
};

export default Ratings;

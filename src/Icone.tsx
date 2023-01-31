import React from 'react';
import Icons from './Icons.svg';
// import PropTypes from 'prop-types';

interface IIcone {
  name: string;
  color: string;
  size: number;
}

export const Icone = ({ name, color, size }: IIcone) => {
  return (
    <svg fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#${name}`}></use>
    </svg>
  );
};

// export const Icone = ({ name, color, size }: IIcone) => (
//   <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
//     <use xlinkHref={`${Icons}#${name}`} />
//   </svg>
// );

// Icon.propTypes = {
//   name: PropTypes.string.isRequired,
//   color: PropTypes.string,
//   size: PropTypes.number,
// };

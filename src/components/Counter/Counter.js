import React from 'react';
import PropTypes from 'prop-types';
import css from './Counter.module.css';

const Counter = ({ index, len }) => (
  <p className={css.counter}>
    {index + 1}/{len}
  </p>
);

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  len: PropTypes.number.isRequired,
};

export default Counter;

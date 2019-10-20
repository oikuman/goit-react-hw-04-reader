import React from 'react';
import PropTypes from 'prop-types';
import css from './Controls.module.css';

const Controls = ({ index, len, handleBack, handleForward }) => {

  const setButton = (action, label, disabled) => (
      <button
          onClick={e => action(e)}
          type="button"
          className={css.button}
          disabled={disabled}
        >
          {label}
        </button>
    );
  
  return (
    <section className={css.controls}>
      {index === 0 ? setButton(handleBack, "Назад", true) : setButton(handleBack, "Назад", false)}
      {index === len - 1 ? setButton(handleForward, "Вперед", true) : setButton(handleForward, "Вперед", false)}
    </section>
  );
};

Controls.propTypes = {
  index: PropTypes.number.isRequired,
  len: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleForward: PropTypes.func.isRequired,
};

export default Controls;

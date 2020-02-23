import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Button(props) {
  const { onClick, text, className, disabled } = props;
  return (<button disabled={disabled} className={`kamereo-btn ${className}`} onClick={onClick}>
    {text}
  </button>)
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;

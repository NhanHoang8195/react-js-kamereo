import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Input(props) {
  const { value, onChange, id, className, disabled } = props;
  return (<input
    id={id}
    value={value}
    onChange={onChange}
    className={`kamereo-input ${className}`}
    disabled={disabled}
  />)
}

Input.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
Input.defaultProps = {
  value: '',
  id: '',
  className: '',
};

export default Input;

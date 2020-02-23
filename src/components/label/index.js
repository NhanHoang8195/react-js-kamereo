import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Label(props) {
  const { htmlFor, title, className } = props;
  return (<label
    className={`kamereo-label ${className}`}
    htmlFor={htmlFor}>
    {title}
  </label>);
}
Label.propTypes = {
  htmlFor: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
Label.defaultProps = {
  htmlFor: '',
  className: '',
};

export default Label;

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Image(props) {
  const { src, className } = props;

  return (<div className={`kamereo-image ${className}`}>
    <img src={src} alt='logo' />
  </div>);
}
Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};
Image.defaultProps = {
  src: '',
  className: '',
};

export default Image;

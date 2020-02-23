import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Select(props) {
  const { options, onChange, value, placeHolder } = props;
  return (<select
    className='kamereo-select'
    value={value}
    onChange={onChange}>
    <option style={{display: 'none'}}>{placeHolder || 'Select'}</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
      { option.label }
    </option>))}
  </select>)
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
};
Select.defaultProps = {
  options: [],
};

export default Select;

import React from 'react';
import PropTypes from 'prop-types';
import { FIELD_TYPES } from '../../constants';
import { Label, Input, Select } from '../../components';
import './styles.scss';

const getField = (type) => {
  if (type === FIELD_TYPES.DISTRICT || type === FIELD_TYPES.CITY) {
    return Select;
  }
  return Input;
};

function Field(props) {
  const { value, onChange, disabled, className, type, id, title, error } = props;
  const FieldType = getField(type);
  return(<div className='kamereo-field'>
    <Label title={title} htmlFor={id} />
    <FieldType
      {...props}
      id={id}
      className={className}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
    {error && <p className='field-error-message'>{error}</p>}
  </div>);
}
Field.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
Field.defaultProps = {
  value: '',
  disabled: false,
  className: '',
  title: '',
};

export default Field;
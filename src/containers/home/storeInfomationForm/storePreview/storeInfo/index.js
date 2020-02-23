import React from 'react';
import PropTypes from 'prop-types';
import { Field } from '../../../../../components';
import { FIELD_TYPES } from '../../../../../constants';

function StoreInfo(props) {
  const { storeName, address, phone } = props;
  return(<div className="store-info">
    <p>STORE INFO.</p>
    <Field
      value={storeName}
      title='Name'
      id='name'
      disabled
    />
    <Field
      value={address}
      title='Address'
      id='address'
      disabled
    />
    <Field
      value={phone}
      title='Phone#'
      id='phone'
      type={FIELD_TYPES.PHONE}
      disabled
    />
  </div>);
}
StoreInfo.propTypes = {
  storeName: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
};
StoreInfo.defaultProps = {
  storeName: '',
  address: '',
  phone: '',
};

export default StoreInfo;

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from '../../../../../components';

function RedInvoice(props) {
  const { companyName, address, mst } = props;

  return (<div>
    <p>RED INVOICE INFO.</p>
    <Field
      id='redInvoice.name'
      value={companyName}
      title='Company Name'
      disabled
    />
    <Field
      id='redInvoice.address'
      value={address}
      title='Address'
      disabled
    />
    <Field
      id='redInvoice.taxCode'
      value={mst}
      title='MST'
      disabled
    />
  </div>);
}

RedInvoice.propTypes = {
  companyName: PropTypes.string,
  address: PropTypes.string,
  mst: PropTypes.string,
};

export default RedInvoice;

import React from 'react';
import AddressFieldEdit from '../addressFieldEdit';
import { Field } from '../../../../../../components';
import './styles.scss';

function RedInvoice(props) {
  const { redInvoice, onChange } = props;
  function handleChangeField(id, value) {
    onChange(id, value, 'redInvoice');
  }
  return (<div className='kamereo-redinvoice-edit'>
    <p className='red-invoice-title'>RED INVOICE INFO.</p>
    <Field
      id='name'
      value={redInvoice.name}
      title='Company Name'
      onChange={(e) => handleChangeField('name', e.target.value)}
    />
    <AddressFieldEdit
      id='redinvoice-address'
      address={redInvoice.address}
      city={redInvoice.city}
      district={redInvoice.district}
      onChange={handleChangeField}
    />
    <Field
      id='taxCode'
      value={redInvoice.taxCode}
      title='MST'
      onChange={(e) => handleChangeField('taxCode', e.target.value)}
    />
  </div>);
}

export default RedInvoice;

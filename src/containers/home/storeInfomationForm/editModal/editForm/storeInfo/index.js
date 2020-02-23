import React from 'react';
import {Field} from '../../../../../../components';
import { validate } from '../../../../../../utils';
import AddressFieldEdit from '../addressFieldEdit';
import './styles.scss';

function StoreInfo(props) {
  const { storeData, onChange } = props;
  const isPhoneValid = validate(storeData.phone, 'phone');
  return(<div className='kamereo-storeinfo-edit'>
    <Field
      id='edit-name'
      value={storeData.name}
      title='Company Name'
      onChange={(e) => onChange('name', e.target.value)}
    />
    <AddressFieldEdit
      id='address'
      address={storeData.address}
      city={storeData.city}
      district={storeData.district}
      onChange={onChange}
    />
    <Field
      id='edit-phone'
      value={storeData.phone}
      title='Phone'
      onChange={(e) => onChange('phone', e.target.value)}
      type='phone'
      error={isPhoneValid ? '' : 'Phone number is invalid'}
    />
  </div>);
}

export default StoreInfo;

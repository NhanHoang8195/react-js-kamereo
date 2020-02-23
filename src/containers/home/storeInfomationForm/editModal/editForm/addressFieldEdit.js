import React from 'react';
import { Input, Select, Label } from '../../../../../components';
import { DISTRICT_OPTIONS, CITY_OPTIONS } from '../constants';

function AddressFieldEdit(props) {
  const { address, city, district, onChange, id } = props;
  return (<div className="kamereo-address">
    <Label title='Store Address' />
    <div className="address-fields">
      <Input id={id} value={address} onChange={(e) => onChange('address', e.target.value)} />
      <Select
        options={DISTRICT_OPTIONS}
        placeHolder='District'
        value={district}
        onChange={(e) => onChange('district', e.target.value)} />
      <Select
        options={CITY_OPTIONS}
        placeHolder='City'
        value={city}
        onChange={(e) => onChange('city', e.target.value)} />
    </div>
  </div>);
}

export default AddressFieldEdit;
import React from 'react';
import {Image, Button} from '../../../../components';
import StoreInfo from './storeInfo';
import RedInvoice from './redInvoice';
import './styles.scss';

function StorePreview(props) {
  const { storeData } = props;
  const { address, city, district, redInvoice } = storeData;
  const storeAddress = address.concat(', ', district).concat(', ', city);
  const redInvoiceAddress = redInvoice.address.concat(', ', redInvoice.district).concat(', ', redInvoice.city);
  return (<div className='store-preview-info'>
    <Image src={storeData.logoUrl} />
    <StoreInfo
      storeName={storeData.name}
      address={storeAddress}
      phone={storeData.phone}
    />
    <RedInvoice
      companyName={redInvoice.name}
      address={redInvoiceAddress}
      mst={redInvoice.taxCode}
    />
    <Button className='edit-profile-btn' onClick={props.onEditProfile} text='Edit Profile' />
  </div>);
}

export default StorePreview;

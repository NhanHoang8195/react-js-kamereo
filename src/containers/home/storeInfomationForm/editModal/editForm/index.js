import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../../../components';
import { validate } from '../../../../../utils';
import StoreInfo from './storeInfo';
import RedInvoice from './redInvoice';
import './styles.scss';

function EditForm(props) {
  const { editData, onUpdateProfile, onChangeField, onCancel, onUpdateProfileError } = props;
  const storeData = {
    name: editData.name,
    address: editData.address,
    district: editData.district,
    city: editData.city,
    phone: editData.phone,
  };
  const validPhoneNumber = validate(storeData.phone, 'phone');
  return (<div className='kamereo-edit-form'>
    <StoreInfo
      storeData={storeData}
      onChange={onChangeField} />
    <RedInvoice
      onChange={onChangeField}
      redInvoice={ editData.redInvoice}
    />
    <div className='edit-form-footer'>
      <Button disabled={!validPhoneNumber} className='save-btn btn-success' onClick={onUpdateProfile} text='Save' />
      <Button disabled={!validPhoneNumber} className='save-btn btn-danger' onClick={onUpdateProfileError} text='Save Error' />
      <Button className='cancel-btn' onClick={onCancel} text='Cancel' />
    </div>
  </div>);
}

EditForm.propTypes = {
  editData: PropTypes.shape({
    redInvoice: PropTypes.object,
  }),
  onUpdateProfile: PropTypes.func,
  onChangeField: PropTypes.func,
  onCancel: PropTypes.func,
};

EditForm.defaultProps = {
  editData: {
    redInvoice: {},
  },
};

export default EditForm;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import EditModal from './editModal';
import StorePreview from './storePreview';
import './styles.scss';

function StoreInfomationForm(props) {
  const { storeData, onUploadImage, onUpdateProfile } = props;
  const [showModal, setShowModal] = useState(false);

  return (<Row className='store-infomation-form'>
    <div className='col-12 col-sm-6'>
      <StorePreview
        storeData={storeData}
        onEditProfile={() => setShowModal(true)}
      />
    </div>
    <EditModal
      show={showModal}
      storeData={storeData}
      onCancel={() => setShowModal(false)}
      onUpdateProfile={onUpdateProfile}
      onUploadImage={onUploadImage}
    />
  </Row>);
}

StoreInfomationForm.propTypes = {
  storeData: PropTypes.shape({
    id: PropTypes.string,
    logoUrl: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    district: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
    redInvoice: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      district: PropTypes.string,
      city: PropTypes.string,
      taxCode: PropTypes.string,
    }),
  }),
};
StoreInfomationForm.defaultProps = {
  storeData: {
    id: '',
    logoUrl: '',
    name: '',
    address: '',
    district: '',
    city: '',
    phone: '',
    redInvoice: {
      name: '',
      address: '',
      district: '',
      city: '',
      taxCode: '',
    },
  },
};

export default StoreInfomationForm;

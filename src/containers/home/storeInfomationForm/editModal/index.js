import React, {useState} from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageUpload from './imageUpload';
import EditForm from './editForm';
import './styles.scss';

const MESSAGE = {
  ERROR: 'Sorry, update profile has been failed, please try again.',
  SUCCESS: 'Update profile successfully.',
};

function EditModal(props) {
  const { storeData, show, onCancel, onUpdateProfile } = props;
  const [editData, setEditData] = useState(storeData);
  const [message, setMessage]  = useState({ error: false, text: '' });

  function handleUploadImage(e) {
    const file = e.target.files[0];

    const fileReader = new FileReader();
    fileReader.onload = (eFileReader) => {
      const fileContent = eFileReader.target.result;
      props.onUploadImage(fileContent).then((res) => {
        setEditData({...editData, logoUrl: res});
      });
    };
    fileReader.readAsDataURL(file);
  }
  function onRemoveImage() {
    setEditData({ ...editData, logoUrl: storeData.logoUrl });
  }
  function onChangeField(key, value, type) {
    if (type === 'redInvoice') {
      const { redInvoice } = editData;
      setEditData({...editData, redInvoice: {...redInvoice, [key]: value} });
    } else {
      setEditData({...editData, [key]: value});
    }
    setMessage({ error: false, text: '' });
  }
  function onSave(error) {
    onUpdateProfile(editData, error).then(() => {
      if (error) {
        setMessage({ error: true, text: MESSAGE.ERROR });
      } else {
        setMessage({ error: false, text: MESSAGE.SUCCESS});
      }
    });
  }

  return (<Modal
      show={show}
      backdrop='static'
      size="xl"
      className='karameo-modal'
      dialogClassName='karameo-modal-dialog'
      onExit={() => setMessage({ error: false, text: '' })}
      centered>
    <Modal.Header>
      <h3>EDIT STORE PROFILE</h3>
      <hr />
    </Modal.Header>
    <Modal.Body>
      {message.text && <p className={`message-text ${message.error ? 'error-message' : 'success-message'}`}>{message.text}</p>}
      <Row className="container-fluid">
        <Col xs={12} sm={4}>
          <p className='store-image-title'>STORE IMAGE</p>
          <ImageUpload
            logoUrl={editData.logoUrl}
            onUploadImage={handleUploadImage}
            onRemove={onRemoveImage}
          />
        </Col>
        <Col xs={12} sm={8}>
          <p className='basic-info-title'>BASIC INFO.</p>
          <EditForm
            editData={editData}
            onUpdateProfile={() => onSave(false)}
            onUpdateProfileError={() => onSave(true)}
            onCancel={onCancel}
            onChangeField={onChangeField}
          />
        </Col>
      </Row>
    </Modal.Body>
  </Modal>);
}
EditModal.propTypes = {
  storeData: PropTypes.object,
  onUploadImage: PropTypes.func,
  onUpdateProfile: PropTypes.func,
};
export default EditModal;

import React from 'react';
import { Image, Button, Label } from '../../../../../components';
import './styles.scss';

function ImageUpload(props) {
  const { logoUrl, onUploadImage, onRemove } = props;
  function onClickInput(e) {
    e.target.value = null;
  }
  return (<div className="kamereo-image-upload">
    <Image src={logoUrl} />
    <input
      type="file"
      onChange={onUploadImage}
      onClick={onClickInput}
      id="kamero-upload-file"
      accept="image/jpeg,image/jpg,image/png"
      className="image-upload-file"
    />
    <div className='upload-img-footer'>
      <Button onClick={onRemove} text='Remove' />
      <Label htmlFor="kamero-upload-file" title='Upload Image' />
    </div>
  </div>);
}

export default ImageUpload;

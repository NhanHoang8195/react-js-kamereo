import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StoreInfomationForm from './storeInfomationForm';
import * as actions from './actions';
import './styles.scss';

function Homepage(props) {
  const { data, isLoadingData, isUpdatingProfile } = props;
  useEffect(() => {
    props.actions.getStoreInfomation();
  }, [props.actions]);

  if (isLoadingData) {
    return (<div>Data is loading...</div>);
  }
  return (
    <div className='home-containers container-fluid'>
      <StoreInfomationForm
        storeData={data}
        onUpdateProfile={props.actions.onUpdateProfile}
        onUploadImage={props.actions.onUploadImage}
        isUpdatingProfile={isUpdatingProfile}
      />
    </div>
  );
}
const mapStateToProps = state => ({
  data: state.homeReducer.get('data'),
  isLoadingData: state.homeReducer.get('isLoadingData'),
  isUpdatingProfile: state.homeReducer.get('isUpdatingProfile'),
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});
Homepage.propTypes = {
  actions: PropTypes.shape({
    getStoreInfomation: PropTypes.func,
    onUpdateProfile: PropTypes.func,
    onUploadImage: PropTypes.func,
  }),
  data: PropTypes.object,
  isLoadingData: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

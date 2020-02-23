import * as EVENT from './type';
import storeInfor_mock from '../../mockData/store_infomation.json';

/**
 * Handle action get data successfully.
 * @param {string} type of action.
 * @param {object} data. Data receive from  axios(res.data)
 * @returns {object} Object need to dispatch action success.
 */
function handleSuccess(type, data) {
  return {
    type,
    payload: data,
  };
}
/**
 * Handle action get data failure.
 * @param {string} type of action.
 * @param {object} error. Error.
 * @returns {object} Object need to dispatch action failure.
 */
function handleFailure(type, error) {
  return {
    type,
    error,
  };
}

/**
 * ActionCreators that return a function.
 * @returns {Function} the function that will be implement by redux-thunk.
 */
export function getStoreInfomation() {
  return (dispatch) => {
    dispatch({ type: EVENT.GET_STORE_INFOMATION_START });
    setTimeout(() => {
      dispatch(handleSuccess(EVENT.GET_STORE_INFOMATION_SUCCESS, storeInfor_mock));
    }, 500);
  };
}

export function onUploadImage(img) {
  return (dispatch) => {
    dispatch({ type: EVENT.UPLOAD_IMAGE_START });
    dispatch(handleSuccess(EVENT.UPLOAD_IMAGE_SUCCESS, img));
    return Promise.resolve(img);
  };
}

export function onUpdateProfile(data, error) {
  return (dispatch) => {
    dispatch({ type: EVENT.UPDATE_PROFILE_START });
    if (error) {
      dispatch(handleFailure(EVENT.UPDATE_PROFILE_FAILURE, { error: true }));
    } else {
      dispatch(handleSuccess(EVENT.UPDATE_PROFILE_SUCCESS, data));
    }
    return Promise.resolve();
  }
}

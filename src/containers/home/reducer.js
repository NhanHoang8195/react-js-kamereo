import { Map } from 'immutable';
import * as EVENT from './type';

const initialState = Map({
  data: undefined,
  isLoadingData: false,
  isUpdatingProfile: false,
  updateProfileError: false,
});
const handlerMaps = {};

handlerMaps[EVENT.GET_STORE_INFOMATION_START] = (state) => state
  .set('isLoadingData', true);
handlerMaps[EVENT.GET_STORE_INFOMATION_SUCCESS] = (state, action) => state
  .set('isLoadingData', false).set('data', action.payload);
handlerMaps[EVENT.GET_STORE_INFOMATION_FALURE] = (state, error) => state
  .set('isLoadingData', false).set('error', error);

handlerMaps[EVENT.UPDATE_PROFILE_START] = (state) => state
  .set('isUpdatingProfile', true);
handlerMaps[EVENT.UPDATE_PROFILE_SUCCESS] = (state, action) => state
  .set('isUpdatingProfile', false).set('data', action.payload);
handlerMaps[EVENT.UPDATE_PROFILE_FAILURE] = (state) => state
  .set('isUpdatingProfile', false)
  .set('updateProfileError', true);

export default (state = initialState, action) => {
  const fn = handlerMaps[action.type];
  return fn ? fn(state, action) : state;
};

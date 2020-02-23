import { FIELD_TYPES, PATTERNS } from '../constants';

export const validate = (data, type) => {
  if (type === FIELD_TYPES.PHONE) {
    return PATTERNS.PHONE_NUMBER_PATTERN.test(data);
  }
  return false;
};
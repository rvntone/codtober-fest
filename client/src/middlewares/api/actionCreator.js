import { CALL_API } from './middleware';

export default ({ endpoint, types, method, data, contentType, accept }) => {
  return {
    [CALL_API]: {
      endpoint,
      types,
      method,
      data,
      contentType,
      accept,
    },
  };
};

const DOMAIN = '192.168.99.100:8443';
const PROTOCOL = 'https://';
export const BASE_URL = `${PROTOCOL}${DOMAIN}`;

const addBody = (data, configWithHeaders) => {
  if (!data) {
    return configWithHeaders;
  }
  if (configWithHeaders.headers['content-type'] === 'multipart/form-data') {
    delete configWithHeaders.headers['content-type'];
    delete configWithHeaders.headers['Accept'];
    return {
      ...configWithHeaders,
      body: data,
    };
  }
  return {
    ...configWithHeaders,
    body: JSON.stringify(data),
  };
};

async function callApi({
  endpoint,
  method,
  data,
  contentType = 'application/json',
  accept = 'application/json',
}) {
  const headers = {
    'content-type': contentType,
    Accept: accept,
  };
  const configWithHeaders = {
    method,
    headers,
  };
  const config = addBody(data, configWithHeaders);

  let response = null;
  try {
    response = await fetch(`${BASE_URL}${endpoint}`, config);
  } catch (e) {
    return Promise.reject({ data: e.message });
  }

  if (!response.ok) {
    const json = await response.json();
    return Promise.reject({ status: response.status, data: json });
  }
  let json = null;
  if (response.status === 204) {
    return '';
  }
  try {
    if (!['application/ld+json', 'application/json'].includes(accept)) {
      return await response.blob();
    }
    json = await response.json();
  } catch (e) {
    return Promise.reject(e.message);
  }
  return json;
}

export const CALL_API = 'CALL_API';

const executeActionsResponse = (next, response, types) => {
  const actionTypes = [].concat(types);
  actionTypes.forEach(actionType => {
    if (typeof actionType === 'function') {
      const { type, ...extras } = actionType(response);
      return next({ response, ...extras, type });
    }

    if (typeof actionType === 'object') {
      return next({ response, ...actionType });
    }

    return next({
      response,
      type: actionType,
    });
  });
};

const executeActionsError = (next, error, types) => {
  const actionTypes = [].concat(types);

  actionTypes.forEach(actionType => {
    if (typeof actionType === 'function') {
      const { type, ...extras } = actionType(error);
      return next({ error, ...extras, type });
    }

    if (typeof actionType === 'object') {
      return next({ error, ...actionType });
    }

    return next({
      error,
      type: actionType,
    });
  });
};

export default store => next => action => {
  const callAPI = action[CALL_API];

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  const { endpoint, types, method, data, contentType, accept } = callAPI;

  const [requestType, successTypes, errorTypes] = types;

  if (typeof requestType === 'object') {
    next(requestType);
  } else {
    next({
      type: requestType,
    });
  }

  return callApi({
    endpoint,
    method,
    data,
    next,
    contentType,
    accept,
  })
    .then(response => {
      return executeActionsResponse(next, response, successTypes);
    })
    .catch(error => {
      return executeActionsError(next, error, errorTypes);
    });
};

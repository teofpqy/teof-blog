import is from './is';

/**
 *
 * @param {string} url
 * @param {object} options
 * @returns {object}
 */
function request(url, options = {}) {
  const defaultOpt = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }
  };
  if (! is.string(url)) throw new Error('url must be string');
  return fetch(url, {...defaultOpt, ...options}).
    then(checkStatus).
    then(parseResponse);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.message = response;
    throw error;
  }
}

function parseResponse(res) {
  if (res.url.includes('.json')) return res.json();
  return res.data;
}

export default request;


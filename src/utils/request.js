import is from './is';
/**
 *
 * @param {string} url
 * @param {object} options
 * @returns {Promise}
 */
function request(url, options = {}) {
  const defaultOpt = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }
  };
  const finalOpt = {...defaultOpt, ...options};
  if (! is.string(url)) throw new Error('url must be string');

  const cacheData= getCached({...finalOpt, ...{url}});
  if ( cacheData !== null) {
    return Promise.resolve(cacheData);
  }
  return fetch(url, finalOpt).
    then(checkStatus).
    then(parseResponse).
    then((res) => cached(res, {...finalOpt, ...{url}}));
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

function getCached(options = {}) {
  if (options && options.cached && options.url && options.method) {
    const result = localStorage.getItem(`${options.method} ${options.url}`);
    if (result !== null) {
      return JSON.parse(result);
    }
  }
  return null;
}
function cached(reponse, options = {}) {
  if (options && options.cached && options.url && options.method) {
    localStorage.setItem(`${options.method} ${options.url}`, JSON.stringify(reponse));
  }
  return reponse;
}

function parseResponse(res) {
  if (res.url.includes('.json')) return res.json();
  return res.data;
}

export default request;


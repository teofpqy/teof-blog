import request from './request';
import { fromEntries } from './obj';
export const resultTemp = {
  request: 'REQUEST',
  success: 'SUCCESS',
  failure: 'FAILURE',
};
/**
 *
 * @param {string} actionDesc
 * @returns {resultTemp}
 */
export function generatorAPIActionTypes(actionDesc) {
  const base = `FETCH_${actionDesc}_`;
  return fromEntries(Object.entries(resultTemp).map(([k, v]) => [k, base + v]));
}

export function generatorAPIActions(url, actionDesc, options = {}) {
  const actionTyps = generatorAPIActionTypes(actionDesc);
  let baseAction = {
    url,
    method: 'GET',
  };
  baseAction = { ...baseAction, ...options };
  return (dispatch) => {
    dispatch({ type: actionTyps.request, ...baseAction });
    return request(url, { cached: true }).then((res) =>
      dispatch({
        type: actionTyps.success,
        payload: res,
        ...baseAction
      })
     ).catch((error) => {
       return dispatch({
        type: actionTyps.failure,
        error,
        ...baseAction
      });
    });
  };
}


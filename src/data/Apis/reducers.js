import { resultTemp } from 'utils/api';

const InitState = {
};
const Apis = (state = InitState, action) => {

  if (action.url && action.method) {
    const key = `${action.method} ${action.url}`;
    const originState = state[key] || {};
    if (action.type.endsWith(resultTemp.request)) {
      return {...state, ...{[key]: {...originState, ...{
        loading: true,
        start_time: Date(),
      }}}};
    }

    if (action.type.endsWith(resultTemp.success)){
      return {...state, ...{[key]: {...originState, ...{
        loading: false,
        response: action.payload,
        end_time: Date(),
      }}}};
    }
    if (action.type.endsWith(resultTemp.failure)) {
      return {...state, ...{[key]: {...originState, ...{
        loading: false,
        error: action.error,
        end_time: Date(),
      }}}};
    }
  }
  return state;

};


export default Apis;

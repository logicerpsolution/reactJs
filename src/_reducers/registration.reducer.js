import { userConstants } from '../_constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
       return {
        registering: true,
        registered:false,
        user: action.user
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        registered:true,
          registering: false,
        user: action.user
      };
    case userConstants.REGISTER_FAILURE:
      return {registered: false};
    default:
      return state
  }
}
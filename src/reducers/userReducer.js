import appConfig from '../appconfig.js';
import * as moment from 'moment';

const userReducer = (state = {users : appConfig.users, userById : appConfig.userById}, action) => {
  if(action.type === 'GET_USERS') {
    return {
      ...state,
      users: action.payload
    }
  }
  if(action.type === 'SET_USER_BYID') {
    console.log(action.payload)
    return {
      ...state,
      userById: action.payload
    }
  }
  if(action.type === 'RESET_USER_BYID') {
    return {
      ...state,
      userById: {}
    }
  }
  return state
}

export default userReducer
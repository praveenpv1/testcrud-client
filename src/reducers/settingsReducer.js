import appConfig from '../appconfig.js';
import * as moment from 'moment';

const settingsReducer = (state = {settings: appConfig.settings}, action) => {
  return state
}

export default settingsReducer
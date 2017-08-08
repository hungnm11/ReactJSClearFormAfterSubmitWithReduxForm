import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loadReducer from './reducer_load';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  load: loadReducer,
  form: formReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import RequirementsReducer from './reducer_reqs';

const rootReducer = combineReducers({
  lending: RequirementsReducer
});

export default rootReducer;
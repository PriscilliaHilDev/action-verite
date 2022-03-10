import { createStore } from "redux";
import rootReducer from './Reducers';
import players from './Reducers/players';

export default createStore(rootReducer);
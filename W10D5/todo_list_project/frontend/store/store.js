import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

const configureStore = (preloadedState = {}) => { 
  return createStore ( 
    rootReducer,
    preloadedState
  ); 
}


export default configureStore;


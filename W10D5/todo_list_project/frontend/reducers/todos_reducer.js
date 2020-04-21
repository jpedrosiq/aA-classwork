import { RECEIVE_TODOS, RECEIVE_TODO } from "./../actions/todo_actions"

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
}


const todoReducer = (state = initialState, action) => {
  Object.freeze(state); 
  const nextState = Object.assign({}, state); // { state: []}

  switch (action.type) {
    case RECEIVE_TODOS:
        action.todos.map(obj => nextState[obj.id] = obj)
      return nextState; 
    case RECEIVE_TODO: 
        nextState[action.todo.id] = action.todo;
        return nextState;
    default:
      return state; 
  }
}

export default todoReducer;
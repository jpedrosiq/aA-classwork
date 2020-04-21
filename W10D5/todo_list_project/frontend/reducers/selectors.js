

export const allTodos = (state) => {
  let stateKeys = Object.keys(state.todos); // 1: {}, 2: {}, 
  return stateKeys.map(key => state.todos[key]);
  
  }


// [{id:1, aiosdjioa, body: aoisjdioasj}, {id:2, aiosdjioa, body: aoisjdioasj}]



// const initialState = [
//   1: {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   2: {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   },
// ]

//const newTodos = [{ id: 1, ...etc }, { id: 2, ...etc }, ...etc];
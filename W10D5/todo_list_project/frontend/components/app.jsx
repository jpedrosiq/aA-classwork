import React from 'react'; 
import TodoListContainer from "./todos/todo_list_container";
// import connect from "react-redux"
// class App extends React.Component {
//   constructor() { 
//     super()
//   }

//   render() { 
//     return (
//       <h1>
//         Todos App 
//       </h1>
//     )
//   }
// }

const App = () => { 
  return (
    <TodoListContainer />
  )
}

export default App; 
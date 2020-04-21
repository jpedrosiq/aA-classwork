import React from 'react'; 


export const TodoListItem = ({todo}) => {
  return ( 
    <li>{todo.title}</li>
  )
}



//{ props.todos.map((object) => {
    //    return ( <li>
    //         {object.title}
    //     </li>)

  
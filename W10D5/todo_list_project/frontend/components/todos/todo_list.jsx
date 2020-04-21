import React from "react";
import {TodoListItem} from './todo_list_item'; 
import TodoForm from './todo_form';


export const TodoList =  (props) => {
    return (
        <>
            < TodoForm  recieveTodo={props.recieveTodo}/> 
            <ul>  
            {props.todos.map(todo => {
            return <TodoListItem todo={todo} /> 
            })}
            </ul>
        </>
        )
}



// {id: titil: body: }
    // {props.todos.map((object) => {
    //    return ( <li>
    //         {object.title}
    //     </li>)
    // })}
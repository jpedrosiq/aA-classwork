import React from "react";


class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {title: "", body: ""}
        this.makeTodo = this.makeTodo.bind(this);
    }

    makeTodo(event){
        
        event.preventDefault();
        this.setState({title: event.target.value},console.log(this.state))

    }

    render() {
        return (
            <form>
                <input onChange={()=>this.makeTodo(event)} value={this.state.title}></input>
                <textarea onChange={()=>this.makeTodo(event)} value={this.state.body}></textarea>
                <button onClick={()=>this.makeTodo(event)}>Create Todo!</button>
            </form>
        )
    }

}

export default TodoForm;


// name = user[name]
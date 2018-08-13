import React, { Component } from "react";
import { Button, Form , Icon, List, Checkbox} from 'semantic-ui-react'
import DB from "../../utils/DB/todoDB"
import "./ToDoList.css";

class ToDoList extends Component {
    // Setting the component's initial state
    state = {
        toDo: "",
        allItems: []
    };

    componentDidMount =() =>{
        this.getItems()
    }
    // componentDidUpdate() {
    //     this.getItems();
    // }
    getItems = () => {
        DB.get()
        .then(res => this.setState({allItems: res.data})
        )}

    handleToDoChange = event => {
        this.setState({toDo: event.target.value});
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        const newTodo = {body: this.state.toDo}
        this.setState({toDo: ""})
        DB.save(newTodo)
        this.getItems()

    };
    completeTodo(obj){
        DB.update(obj).then(this.getItems)
        this.getItems()
        
    }

    deleteTodo(id){
        DB.delete(id).then(this.getItems)
        this.getItems()
    }

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>

                <h3>My ToDo List 👰🏻</h3>

                <Form>
                    <Form.Field>
                        <label>To Do: </label>
                        <input placeholder='To Do' value={this.state.toDo} onChange={this.handleToDoChange}/>
                    </Form.Field>
                    <Button type='submit' onClick={this.handleFormSubmit}>Add</Button>
                </Form>


                <List animated divided verticalAlign='middle'>

                   {this.state.allItems.map(todo => 
                   <List.Item>
                        <Checkbox onClick={() => this.completeTodo(todo)}/>
                        {todo.completed === false ?
                            todo.body : "completed-" + todo.body
                        }
                        <button><Icon color="red" name='x' onClick={() => this.deleteTodo(todo._id)}/></button>
                    </List.Item>
                    )}

                </List>


            </div>
        );
    }
}

export default ToDoList;

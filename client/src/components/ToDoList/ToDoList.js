import React, { Component } from "react";
import { Button, Form , Icon, List} from 'semantic-ui-react'

import "./ToDoList.css";

class ToDoList extends Component {
    // Setting the component's initial state
    state = {
        toDo: "",
        allItems: []
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();


    };

    addTodo(){
        // function to add new todo
    }

    completeTodo(){
        // function to mark todo completed
    }

    deleteTodo(){
        // function to delete todo
    }

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>

                <h3> My ToDo List</h3>

                <Form>
                    <Form.Field>
                        <label>To Do: </label>
                        <input placeholder='To Do' />
                    </Form.Field>
                    <Button type='submit'>Add</Button>
                </Form>


                <List animated divided verticalAlign='middle'>

                   {this.state.allItems.map(todo => 
                   <List.Item>
                        <span><Icon color="green" name='check' onClick={this.completeTodo("id")}/></span>
                        {todo}
                        <span><Icon color="red" name='x' onClick={this.deleteTodo("id")}/></span>
                    </List.Item>
                    )}

                </List>


            </div>
        );
    }
}

export default ToDoList;

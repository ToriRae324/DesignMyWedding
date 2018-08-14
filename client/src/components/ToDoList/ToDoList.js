import React, { Component } from "react";
import { Button, Form, Icon, List, Checkbox, Card, Label } from 'semantic-ui-react'
import DB from "../../utils/DB/todoDB"
import "./ToDoList.css";

class ToDoList extends Component {
    // Setting the component's initial state
    state = {
        toDo: "",
        allItems: []
    };

    componentDidMount = () => {
        this.getItems()
    }
    // componentDidUpdate() {
    //     this.getItems();
    // }
    getItems = () => {
        DB.get()
            .then(res => this.setState({ allItems: res.data })
            )
    }

    handleToDoChange = event => {
        this.setState({ toDo: event.target.value });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        const newTodo = { body: this.state.toDo }
        this.setState({ toDo: "" })
        DB.save(newTodo)
        this.getItems()

    };
    completeTodo(obj) {
        DB.update(obj).then(this.getItems)
        this.getItems()

    }

    deleteTodo(id) {
        DB.delete(id).then(this.getItems)
        this.getItems()
    }

    render() {
        return (
            <Card id="todoCard">
                <Card.Content header='My ToDo List' style={{"fontFamily": "'Dancing Script', cursive" ,
    "fontSize": "xx-large"}}/>
                <Card.Content description={
                    <Form>
                        <Form.Field>
                            
                            <input placeholder='To Do' value={this.state.toDo} onChange={this.handleToDoChange} />
                        </Form.Field>
                        <Button type='submit' onClick={this.handleFormSubmit}>Add</Button>
                    </Form>
                } />
                <Card.Content extra>
                    <List animated divided verticalAlign='middle'>

                        {this.state.allItems.map(todo =>

                            (todo.completed === false ? 
                                <List.Item>
                            
                                <Checkbox className="todoItem" onClick={() => this.completeTodo(todo)} label={todo.body}/>
                                <span><Icon color="red" name='x' onClick={() => this.deleteTodo(todo._id)} /></span>
                                </List.Item>
                            :
                            
                                <List.Item className="todoItem completed">
                                {todo.body}
                                <span><Icon color="red" name='x' onClick={() => this.deleteTodo(todo._id)} /></span>
                                </List.Item>
                            )
                        )}

                    </List>
                </Card.Content>
            </Card>
        );
    }
}

export default ToDoList;

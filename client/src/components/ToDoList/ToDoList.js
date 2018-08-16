import React, { Component } from "react";
import { Button, Form, Icon, List, Checkbox, Card, Label } from 'semantic-ui-react'
import DB from "../../utils/DB/todoDB"
import "./ToDoList.css";
import Auth from "../../modules/Auth"

class ToDoList extends Component {
    //Setting the component's initial state
    state = {
        toDo: "",
        allItems: []
    };

    componentDidMount = () => {
        this.getItems()
    }

    componentDidUpdate() {
        this.getItems();
    }

    getItems = () => {
        DB.get()
            .then(res => this.setState({ allItems: res.data.todos })
            )
    }

    handleToDoChange = event => {
        this.setState({ toDo: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const newTodo = { body: this.state.toDo }
        this.setState({ toDo: "" })

        DB.save(newTodo)


    };
    completeTodo(obj) {
        DB.update(obj)

    }

    deleteTodo(id) {
        DB.delete(id).then(this.getItems())
        this.getItems()
    }

    render() {
        return (


            Auth.isUserAuthenticated() ? (

                <Card id="todoCard">
                    <Card.Content header='My ToDo List' style={{
                        "fontFamily": "'Dancing Script', cursive",
                        "fontSize": "xx-large"
                    }} />
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
                                    <List.Item className="todoItem">
                                        <List.Icon color="green" name='check' size='large' verticalAlign='middle' onClick={() => this.completeTodo(todo)} />
                                        <List.Content>
                                            <List.Header>{todo.body}</List.Header>
                                        </List.Content>
                                        <List.Icon color="red" name='x' size="small" verticalAlign='middle' onClick={() => this.deleteTodo(todo._id)} />
                                    </List.Item>
                                    :

                                    <List.Item className="todoItem completed">
                                        <List.Content>
                                            <List.Header>{todo.body}<List.Icon color="red" name='x' size="small" verticalAlign='middle' onClick={() => this.deleteTodo(todo._id)} /></List.Header>

                                        </List.Content>

                                    </List.Item>
                                )
                            )}

                        </List>
                    </Card.Content>
                </Card>


            ) : (

                    <Card id="todoCard">
                        <Card.Content header='My ToDo List' style={{
                            "fontFamily": "'Dancing Script', cursive",
                            "fontSize": "xx-large"
                        }} />
                        <Card.Content description={
                            <Form>
                                <Form.Input placeholder='Login for access' disabled />
                            </Form>
                        } />
                    </Card>
                )

        );
    }
}



    export default ToDoList;

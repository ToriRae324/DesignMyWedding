import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Dimmer,Button, Header, Form } from 'semantic-ui-react'
import "./LoginPage.css"
import DB from '../../utils/DB/loginDB'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.email && this.state.password) {
            // axios ajax call here
            DB.login({
                email: this.state.email,
                password: this.state.password
            })
            .then(res=> console.log(res))
            .then(this.setState({email: '', password: ''}))
            .catch(err=> console.log(err.response));
        } else {
            alert('Please check that all the fields were filled out');
        }
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);
    }

    render () {
      return (
        <Dimmer active page>
            <Header as='h1'  inverted>
            Log In!
          </Header>
            <div>
            <br /><br />

                <Form>
    <Form.Field>
      <label id="email">Email</label>
      <input 
      type="email"
      name="email"
      value={this.state.email}
      onChange={this.handleInputChange}
      />
    </Form.Field>
    <Form.Field>
      <label id="password">Password</label>
      <input 
      type="password"
      name="password"
      value={this.state.password}
      onChange={this.handleInputChange} />
    </Form.Field>
    <br /><br />
    <Button onClick={this.handleFormSubmit}>Login</Button>
  </Form>

<h3>
Don't have an account? <Link to='/signup'>Create an Account</Link>
</h3>
            </div>

            </Dimmer>
        )}
}
  

export default LoginPage;


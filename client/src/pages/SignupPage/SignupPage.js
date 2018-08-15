import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { Dimmer, Button, Header, Form } from 'semantic-ui-react'
import "./SignupPage.css"
import DB from '../../utils/DB/loginDB'

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            email: '',
            password: '',
            name: '',
            signedup: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.email && this.state.password.length >= 8) {
            // axios ajax call here
            DB.signup({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
            .then(res => 
                {
                    if(res.status === 200) {
                        this.setState({ signedup: true})
                    } 
                }
            )               
                .catch(err => {console.log("Error: "+ err)
                return alert("That email address is already in use.")}
            );
        } else if (this.state.password.length < 8) {
            alert("Password must be at least 8 characters.")
        } else if (!this.state.name || !this.state.email || !this.state.password) {
            alert('Please check that the whole form is filed out');
        } 
    }



    render() {
        if (this.state.signedup){
            return <Redirect to="/login"/>   
        }
        return (
            <Dimmer active page>
                <Header as='h1' inverted>
                    Welcome to Design My Wedding
                    <Header.Subheader>Sign Up</Header.Subheader>
          </Header>
                <div>
                    <br /><br />
                    <Form>
                        <Form.Field required>
                            <label id="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                
                            />
                        </Form.Field>
                        <Form.Field required>
                            <label id="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </Form.Field>
                        <Form.Field required>
                            <label id="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                        </Form.Field>
                        <br /><br />
                        <Button onClick={this.handleFormSubmit}>Create Account</Button>
                    </Form>

                    <h3>
                        Have an account already? <Link to='/login'>Login</Link></h3>

                        <h3>
<Link to='/browse/venues'>Continue as Guest</Link>
</h3>

                </div>

            </Dimmer>
        );
    }

}

export default SignupPage;
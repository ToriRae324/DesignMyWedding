import React, { Component } from "react";
import { Button, Form, Icon, List, Checkbox, Card, Label } from 'semantic-ui-react'
import DB from "../../utils/DB/todoDB"
import "./Welcome.css";
import Auth from "../../modules/Auth"

class Welcome extends Component {
    //Setting the component's initial state
    state = {
        name: "",
    };

    

    componentDidMount() {
       if(Auth.isUserAuthenticated()) {this.getName()};
    }

    getName = () => {
        DB.get()
            .then(res => this.setState({ name: res.data.name })
            )
    }


    render() {
        return (


            Auth.isUserAuthenticated() ? (
            <div className="item">
                <h4 >Welcome, {this.state.name}</h4>
            </div>

            ) : (
            <div className="item">
                <h4>Welcome, Guest User</h4>  
            </div>    
                )

        );
    }
}



    export default Welcome;

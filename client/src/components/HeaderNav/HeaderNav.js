import React, { Component } from "react";
import "./HeaderNav.css"
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Auth from "../../modules/Auth"
import Welcome from "../Welcome"



export default class HeaderNav extends Component {
  state = {
    activeItem: 'home',
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  logout = () => () => {
    Auth.deauthenticateUser()
    alert("Logged Out")
  }

  




  render() {

    const { activeItem } = this.state
    return (

      Auth.isUserAuthenticated() ? (

        
          <Menu secondary id="header">

            <h1 id="title"> Design My Wedding </h1>

            <Dropdown item text='Browse'>
              <Dropdown.Menu>
                <Link to="/browse/venues"><Dropdown.Item>Venues</Dropdown.Item></Link>
                <Link to="/browse/clothing"><Dropdown.Item>Clothing</Dropdown.Item></Link>
                <Link to="/browse/extras"><Dropdown.Item>Extras</Dropdown.Item></Link>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='My Stuff'>
              <Dropdown.Menu>
                <Link to="/mystuff/venues"><Dropdown.Item>Venues</Dropdown.Item></Link>
                <Link to="/mystuff/clothing"><Dropdown.Item>Clothing</Dropdown.Item></Link>
                <Link to="/mystuff/extras"><Dropdown.Item>Extras</Dropdown.Item></Link>
              </Dropdown.Menu>
            </Dropdown>

            

            <div className="welcome">
            <Welcome />
            <Link to="/login">

              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.logout()}
              />
              </Link>
            </div>
          </Menu>

        

      ) : (

          
            <Menu secondary id="header">

              <h1 id="title"> Design My Wedding </h1>

              <Dropdown item text='Browse'>
                <Dropdown.Menu>
                  <Link to="/browse/venues"><Dropdown.Item>Venues</Dropdown.Item></Link>
                  <Link to="/browse/clothing"><Dropdown.Item>Clothing</Dropdown.Item></Link>
                  <Link to="/browse/extras"><Dropdown.Item>Extras</Dropdown.Item></Link>
                </Dropdown.Menu>
              </Dropdown>

              <div className="welcome">
               <Welcome />
                <Link to="/login">
                  <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                  /></Link>
                  
              </div>

              
            </Menu>
          
        )
    )
  }
}



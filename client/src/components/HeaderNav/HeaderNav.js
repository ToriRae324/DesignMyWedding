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

        <div>
          <Menu pointing secondary id="header">

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

            

            <Menu.Menu position='right'>
            <Welcome />
            <Link to="/login">
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.logout()}
              />
              </Link>
            </Menu.Menu>
          </Menu>

        </div>

      ) : (

          <div>
            <Menu pointing secondary id="header">

              <h1 id="title"> Design My Wedding </h1>

              <Dropdown item text='Browse'>
                <Dropdown.Menu>
                  <Link to="/browse/venues"><Dropdown.Item>Venues</Dropdown.Item></Link>
                  <Link to="/browse/clothing"><Dropdown.Item>Clothing</Dropdown.Item></Link>
                  <Link to="/browse/extras"><Dropdown.Item>Extras</Dropdown.Item></Link>
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Menu position='right'>
               <Welcome />
                <Link to="/login">
                  <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                  /></Link>
              </Menu.Menu>
            </Menu>
          </div>
        )
    )
  }
}



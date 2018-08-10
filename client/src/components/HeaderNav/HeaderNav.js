import React, { Component } from "react";
import "./HeaderNav.css"
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class HeaderNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary id="header">

        <h1 id="title"> Amazing Title </h1>

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
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}

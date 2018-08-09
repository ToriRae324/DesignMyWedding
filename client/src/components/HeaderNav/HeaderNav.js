import React, { Component } from "react";
import "./HeaderNav.css"
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class HeaderNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary style={{ marginBottom: '15px', backgroundColor: "#faeec4" }}>
          <Link to="/browse/venues"> <Menu.Item 
          name='browse'
          active={activeItem === 'browse'} 
          onClick={this.handleItemClick} 
          /></Link>
          <Link to="/mystuff/venues">
          <Menu.Item
            name='my stuff'
            active={activeItem === 'my stuff'}
            onClick={this.handleItemClick}
          />
          </Link>
          
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

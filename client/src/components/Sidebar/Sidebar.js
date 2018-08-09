import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default class Sidebar extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Venues</Menu.Header>

          <Menu.Menu>
              
            <Menu.Item
              href='/browse/venues'
              name='All Venues'
              active={activeItem === 'All Venues'}
              onClick={this.handleItemClick}
            />
            
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Clothing</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              href='/browse/dresses'
              name='Wedding Dresses'
              active={activeItem === 'Wedding Dresses'}
              onClick={this.handleItemClick}
            />
            
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Decor</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              href='/browse/decor'
              name='All Decor'
              active={activeItem === 'All Decor'}
              onClick={this.handleItemClick}
            />
            
          </Menu.Menu>
        </Menu.Item>

      </Menu>
    )
  }
}


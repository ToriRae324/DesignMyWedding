import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


export default class SavedSidebar extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Saved Venues</Menu.Header>

          <Menu.Menu>
              
            <Menu.Item
              href='/mystuff/venues'
              name='All Saved Venues'
              active={activeItem === 'All Saved Venues'}
              onClick={this.handleItemClick}
            />
            
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Saved Clothing</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              href='/mystuff/dresses'
              name='Saved Wedding Dresses'
              active={activeItem === 'Saved Wedding Dresses'}
              onClick={this.handleItemClick}
            />
            
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Saved Decor</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              href='/mystuff/decor'
              name='All Saved Decor'
              active={activeItem === 'All Saved Decor'}
              onClick={this.handleItemClick}
            />
            
          </Menu.Menu>
        </Menu.Item>

      </Menu>
    )
  }
}


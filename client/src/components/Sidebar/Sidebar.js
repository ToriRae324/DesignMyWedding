import React, { Component } from 'react'
import { Menu, Sticky } from 'semantic-ui-react'


export default class Sidebar extends Component {

  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}
    const { contextRef } = this.state
    return (
      <Sticky context={contextRef}>
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
              name='Browse Clothing'
              active={activeItem === 'Browse Clothing'}
              onClick={this.handleItemClick}
            />
            
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Extras</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              href='/browse/decor'
              name='Browse Extras'
              active={activeItem === 'Browse Extras'}
              onClick={this.handleItemClick}
            />
            
          </Menu.Menu>
        </Menu.Item>

      </Menu>
      </Sticky>
    )
  }
}


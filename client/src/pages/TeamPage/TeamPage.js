import React, { Component } from 'react'
import { Accordion, Icon, Image } from 'semantic-ui-react'

class TeamPage extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
        <div>
        <h1>About The Team</h1>
      <Accordion styled exclusive={false} fluid>
      
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          About Blaise
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
        
        <Image src='http://placekitten.com/200/200' size='small' circular verticalAlign='middle'/>
          <p>
            Blaise worked his ass off to complete authentication! Go Auth!!
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          About Victoria
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        
        <Image src='http://placekitten.com/300/200' size='small' circular verticalAlign='middle'/>
          <p>
            Victoria is the one who made all this shit look good.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          About Eric
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        
        <Image src='Eric.jpeg' size='small' circular  verticalAlign='middle'/>
         <p> 
            Eric created and ensured that the back-end of the project worked properly. He created the controllers, routes and front end calls to the backend to provide our application the functionality that our app required. Eric used the Foursquare api to gather information on the potential wedding venues that our users may browse. Eric also implemented a geolocater to allow the user to view venues that are near them.
          </p>
          
        </Accordion.Content>
      </Accordion>
      </div>
    )
  }
}

export default TeamPage
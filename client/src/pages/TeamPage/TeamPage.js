import React, { Component } from 'react'
import { Accordion, Icon, Image } from 'semantic-ui-react'

const tori = './tori.jpeg';
const blaise = "./blaise.png";
const eric = "./Eric.png";


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
        <h1 className="title">About The Team</h1>
      <Accordion styled exclusive={false} fluid>
      
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          About Blaise
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
        
        <Image src={blaise} size='small' circular verticalAlign='middle'/>
          <p>
            Blaise worked on User Authentication, securing our site, your password, and also working to make sure all of your personalized data remains yours!
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          About Victoria
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        
        <Image src={tori} size='small' circular verticalAlign='middle'/>
          <p>
            Victoria like coding, cats, reading, and making things look good. 
            </p><p>
            Victoria used her front-end skills to create and clean layout that was easy to navigate and pleasing to the eye. She was also in charge of gathering data for the Clothing and Extras using the Etsy API.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          About Eric
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        
        <Image src={eric} size='small' circular  verticalAlign='middle'/>
         <p> 
         Eric created and ensured that the back-end of the project worked properly. He created the controllers, routes and front end calls to the backend to provide our application the functionality that our app required.
         </p><p> Eric used the Foursquare api to gather information on the potential wedding venues that our users may browse. Eric also implemented a geolocater to allow the user to view venues that are near them.
          </p>
          
        </Accordion.Content>
      </Accordion>
      </div>
    )
  }
}

export default TeamPage
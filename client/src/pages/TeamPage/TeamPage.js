import React, { Component } from 'react'
import { Accordion, Icon, Image } from 'semantic-ui-react'

const tori = './tori.jpeg';
const blaise = "./blaise.png";


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
        
        <Image src='http://placekitten.com/200/300' size='small' circular  verticalAlign='middle'/>
         <p> 
            Eric is the one who made the back end routes and linked all this together.
          </p>
          
        </Accordion.Content>
      </Accordion>
      </div>
    )
  }
}

export default TeamPage
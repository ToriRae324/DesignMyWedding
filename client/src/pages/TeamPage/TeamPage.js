import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

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
          <p>
            Blaise worked his ass off to complete authentication! Go Auth!!
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          About Victoria
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Victoria is the one who made all this shit look good.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          About Eric
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Eric is the one who made the back end routes and linked all this shit together.
          </p>
          
        </Accordion.Content>
      </Accordion>
      </div>
    )
  }
}

export default TeamPage
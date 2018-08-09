import React from "react"
import "./Venue.css"
import { Card, Image, Button, Icon } from "semantic-ui-react"


const VenueResults = (props) => (
    <div className="ui raised link card">
    <div className="content">
    <i className="right floated trash icon" onClick={() => props.onClick(props.id)}></i>
    <div className="header">{props.name}</div>
    <a className="image" alt="venue" href={props.locale}>
        <img src="http://via.placeholder.com/350x150" className="img"/>
    </a>
    <div className="description">
    Phone: {props.phone}
    <br/>
    Address: {props.address}
    <br/>
    Rating: {props.rating}
    </div>
    </div>
    </div>
)

export default VenueResults


//onClick={() => props.onClick(props.id)}
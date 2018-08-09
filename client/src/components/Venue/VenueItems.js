import React from "react"
import "./Venue.css"
import { Card, Image, Button, Icon } from "semantic-ui-react"


const VenueResults = (props) => (
    <div className="ui raised link card">
    <div className="content">
    <i className="right floated like icon" onClick={() => props.onClick(props.name, props.phone, props.address, props.rating, props.photo, props.url)}></i>
    <div className="header">{props.name}</div>
    <a className="image" alt="venue">
        <img src="http://via.placeholder.com/350x150" className="img"/>
    </a>
    <div className="description">
    Phone: {props.phone}
    <br/>
    Address: {props.address}
    <br/>
    Rating: {props.rating}
    <br/>
    {!(props.url === "not provided") ? <a href={props.url} target="_blank">Website</a> : "Website not provided"}
    </div>
    </div>
    </div>
)

export default VenueResults

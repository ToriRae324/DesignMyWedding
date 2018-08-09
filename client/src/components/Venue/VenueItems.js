import React from "react"
import "./Venue.css"
import { Card, Image, Button, Icon } from "semantic-ui-react"


const VenueResults = (props) => (
    <div className="ui raised link card">
    <div className="content">
    <i className="right floated like icon" onClick={() => props.onClick(props.name, props.phone, props.address, props.rating, props.photo)}></i>
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


//  <div class="ui card">
// <div class="image">
// <img src="/images/avatar2/large/kristy.png">
// </div>
// <div class="content">
// <a class="header">Kristy</a>
// <div class="meta">
//   <span class="date">Joined in 2013</span>
// </div>
// <div class="description">
//   Kristy is an art director living in New York.
// </div>
// </div>
// <div class="extra content">
// <a>
//   <i class="user icon"></i>
//   22 Friends
// </a>
// </div>
// </div> */}
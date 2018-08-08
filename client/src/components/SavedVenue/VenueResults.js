import React from "react"
import "./Venue.css"
import { Card, } from "semantic-ui-react"


const VenueResults = (props) => (
    <div className="ui three cards">{props.children}</div>
)

export default VenueResults

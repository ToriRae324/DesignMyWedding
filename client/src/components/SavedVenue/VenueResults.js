import React from "react"
import "./Venue.css"
import { Card, } from "semantic-ui-react"


const VenueResults = (props) => (
    <Card.Group>{props.children}</Card.Group>
)

export default VenueResults

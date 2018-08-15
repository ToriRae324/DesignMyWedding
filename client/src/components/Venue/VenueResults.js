import React from "react"
import "./Venue.css"


const VenueResults = (props) => (
    <div className="ui three cards stackable">{props.children}</div>
)

export default VenueResults

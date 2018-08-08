import React, { Component } from "react";
import "./Venue.css";
import API from "../../utils/API/VenueAPI"
import DB from "../../utils/DB/VenueDB"
import VenueResults from  "./VenueResults"
import VenueItems from "./VenueItems"
import { Card } from "semantic-ui-react"

class Venue extends Component {
    state = {
        venues: []
    }
    componentDidMount() {
        const venues = API.getVenues("Churches", "Charlotte")
            .then(res =>
                this.setState({
                    venues: res.data.response.groups[0].items
                }))
    }
    saveVenue = (event) => {
        const {name} = event.target
        alert(name + " was saved")
    }

    render(){
        return(
                <VenueResults>
                    {
                this.state.venues.map(venue => {return(
                <VenueItems
                    name={venue.venue.name}
                    phone={venue.venue.contact.formattedPhone}
                    address={venue.venue.location.address}
                    rating={venue.venue.rating}
                    photo={venue.venue.photos.groups[0]}
                    onClick={this.saveVenue}
                />)})}
                </VenueResults>
        )
    }
}
export default Venue;


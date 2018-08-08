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
        const venues = DB.get()
            .then(res =>
                this.setState({
                    venues: res.data
                }))
    }
    deleteVenue = (id) => {
        DB.delete(id)
    }

    render(){
        return(
                <VenueResults>
                    {
                this.state.venues.map(venue => {return(
                <VenueItems
                    id={venue._id}
                    name={venue.name}
                    phone={venue.phone}
                    address={venue.locale}
                    rating={venue.rating}
                    photo={venue.photo}
                    onClick={this.deleteVenue}
                />)})}
                </VenueResults>
        )
    }
}
export default Venue;


import React, { Component } from "react";
import "./Venue.css";
import API from "../../utils/API/VenueAPI"
import DB from "../../utils/DB/VenueDB"
import VenueResults from  "./VenueResults"

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

    render(){
        return(
            
                <VenueResults>
                    {
                this.state.venues.map(venue => {return(
                <li>{venue.venue.name}</li>)})}
                </VenueResults>
            
        )
    }
}
export default Venue;
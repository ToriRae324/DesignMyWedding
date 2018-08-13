import React, { Component } from "react";
import "./Venue.css";
import DB from "../../utils/DB/VenueDB"
import VenueResults from  "./VenueResults"
import VenueItems from "./VenueItems"

class Venue extends Component {
    state = {
        venues: []
    }

    getVenues(){
        DB.get()
        .then(res =>
        this.setState({venues: res.data}))
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getVenues();
    }

    // componentDidUpdate() {
    //     this.getVenues();
    // }
    deleteVenue = (id) => {
        alert(`Venue Deleted`)
        DB.delete(id).then(this.getVenues())
        this.getVenues()
        
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


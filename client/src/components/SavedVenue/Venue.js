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
    saveVenue = (name, phone, address, rating, photo) => {
        const savedVenue = {
            name: name,
            locale: address,
            photo: photo,
            rating: rating,
            phone: phone,
            occupancy: "Call for details",
        }
        DB.save(savedVenue)
    }

    render(){
        return(
                <VenueResults>
                    {
                this.state.venues.map(venue => {return(
                <VenueItems
                    id={Math.floor(Math.random() * 1000)}
                    name={venue.name}
                    phone={venue.phone}
                    address={venue.locale}
                    rating={venue.rating}
                    photo={venue.photo}
                    onClick={this.saveVenue}
                />)})}
                </VenueResults>
        )
    }
}
export default Venue;


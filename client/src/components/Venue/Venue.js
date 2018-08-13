import React, { Component } from "react";
import "./Venue.css";
import API from "../../utils/API/VenueAPI"
import DB from "../../utils/DB/VenueDB"
import VenueResults from  "./VenueResults"
import VenueItems from "./VenueItems"
import { Dimmer, Loader, Button} from 'semantic-ui-react'


class Venue extends Component {
    state = {
        venues: [],
        isLoaded: false
    }
    getVenues(venue) {
        API.getVenues(venue, "Charlotte")
            .then(res =>
                this.setState({
                    venues: res.data.response.groups[0].items,
                    isLoaded: true
                }))
    }

    componentDidMount() {
        this.getVenues("churches");
    }

    saveVenue = (name, phone, address, rating, photo) => {
        alert("venue saved")
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
        const isLoaded = this.state.isLoaded
        return (
                <div>
                    <div>
                    <Button.Group id = "btnGrp" attached='top'>
                        <Button color='teal' content='Wedding Hall' onClick={(venue) => this.getVenues("wedding halls")}/>
                        <Button color='black' content='Parks' onClick={(venue) => this.getVenues("parks")}/>
                        <Button color='grey' content='Hotels' onClick={(venue) => this.getVenues("hotels")}/>
                        <Button color='seagreen' content='Country Clubs' onClick={(venue) => this.getVenues("country club")}/>
                        <Button color='pink' content='Churches' onClick={(venue) => this.getVenues("churches")}/>
                    </Button.Group>
                </div>
                    <VenueResults> 
                    <Dimmer inverted className={isLoaded ? '' : 'active'}>
                        <Loader inverted>Loading Wedding Venues</Loader>
                    </Dimmer>
                    {
                this.state.venues.map(venue => {return(
                <VenueItems
                    id={Math.floor(Math.random() * 1000)}
                    name={venue.venue.name}
                    phone={venue.venue.contact.formattedPhone}
                    address={venue.venue.location.address}
                    rating={venue.venue.rating}
                    photo={venue.venue.photos.groups[0]}
                    onClick={this.saveVenue}
                />)})}
                </VenueResults>
                </div>
        )
    }
}
export default Venue;


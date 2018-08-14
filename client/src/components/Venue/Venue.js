import React, { Component } from "react";
import "./Venue.css";
import API from "../../utils/API/VenueAPI"
import DB from "../../utils/DB/VenueDB"
import VenueResults from "./VenueResults"
import VenueItems from "./VenueItems"
import { Dimmer, Loader, Button, Input } from 'semantic-ui-react'


class Venue extends Component {
    state = {
        venues: [],
        isLoaded: false,
        location: "Charlotte",
        nextLocation: "",
    }
    getVenues(venue, location) {
        this.setState({
            venues: [],
            isLoaded: false
        })
        API.getVenues(venue, location)
            .then(res =>
                this.setState({
                    venues: res.data.response.groups[0].items,
                    isLoaded: true
                }))
    }

    componentDidMount() {
        this.getVenues("churches", this.state.location)
    }

    handleLocationChange = (event) =>{
        this.setState({nextLocation: event.target.value})
    }
    changeLocation = () =>{
        this.setState({location: this.state.nextLocation,nextLocation: ""})   
        this.getVenues("churches", this.state.nextLocation)
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

    render() {
        const isLoaded = this.state.isLoaded
        return (
            <div>
                <h1 className="title">Wedding Venues Around {this.state.location}</h1>
                <div>
                <div class="ui input focus" id="searchForm">
                        <input type="text" placeholder="Enter Desired Location..." value={this.state.nextLocation} onChange={this.handleLocationChange}/>
                        <Button color="blue" content="Search" onClick={this.changeLocation}/>
                    </div>
                    
                    <Button.Group id="btnGrp" attached='top'>
                        <Button color='teal' content='Wedding Hall' onClick={(venue) => this.getVenues("wedding halls",this.state.location)} />
                        <Button color='black' content='Parks' onClick={(venue) => this.getVenues("parks", this.state.location)} />
                        <Button color='grey' content='Hotels' onClick={(venue) => this.getVenues("hotels", this.state.location)} />
                        <Button color='seagreen' content='Country Clubs' onClick={(venue) => this.getVenues("country club", this.state.location)} />
                        <Button color='pink' content='Churches' onClick={(venue) => this.getVenues("churches", this.state.location)} />
                    </Button.Group>
                </div>
                <VenueResults>
                    <Dimmer inverted className={isLoaded ? '' : 'active'}>
                        <Loader inverted>Loading Wedding Venues</Loader>
                    </Dimmer>
                    {
                        this.state.venues.map(venue => {
                            return (
                                <VenueItems
                                    id={Math.floor(Math.random() * 1000)}
                                    name={venue.venue.name}
                                    phone={venue.venue.contact.formattedPhone}
                                    address={venue.venue.location.address}
                                    rating={venue.venue.rating}
                                    photo={venue.venue.photos.groups[0]}
                                    onClick={this.saveVenue}
                                />)
                        })}
                </VenueResults>
            </div>
        )
    }
}
export default Venue;


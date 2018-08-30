import React, { Component } from "react";
import "./Venue.css";
import API from "../../utils/API/VenueAPI"
import DB from "../../utils/DB/VenueDB"
import VenueResults from "./VenueResults"
import VenueItems from "./VenueItems"
import { Dimmer, Loader, Button, Input } from 'semantic-ui-react'
import { geolocated } from 'react-geolocated'


class Venue extends React.Component {
    state = {
        venues: [],
        isLoaded: false,
        location: "Charlotte",
        nextLocation: "",
        lat: "",
        long: ""
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

    handleLocationChange = (event) => {
        this.setState({ nextLocation: event.target.value })
    }
    changeLocation = () => {
        this.setState({ location: this.state.nextLocation, nextLocation: "" })
        this.getVenues("churches", this.state.nextLocation)
    }

    nearMe = (lat, long) => {
        this.setState({location: `${lat},${long}`})
        this.getVenues("churches", `${lat},${long}`)
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
            < div >
            {
            !this.props.isGeolocationAvailable
                ? <div>Your browser does not support Geolocation</div>
                : !this.props.isGeolocationEnabled
                    ? <div>Geolocation is not enabled</div>
                    : this.props.coords
                        ?

                        (<div />)
                        :
                        (<div />)}
                        
                        <div>
                            { (/[0-9]/).test(this.state.location) ?
                            <h1 className="title">Wedding Venues Near Me</h1>
                            :
                            <h1 className="title">Wedding Venues Around {this.state.location}</h1>
                            }
                            <div>
                                <div className="ui input focus" id="searchForm">
                                    <input type="text" placeholder="Enter Desired Location..." value={this.state.nextLocation} onChange={this.handleLocationChange} />
                                    <Button color="blue" content="Search" onClick={this.changeLocation} />
                                    <Button color="green" content="Near Me" onClick={()=>this.nearMe(`${this.props.coords.latitude}`,`${this.props.coords.longitude}`)}/>
                                </div>
                                <div>
                                {/* <Button.Group id="btnGrp" attached='top'> */}
                                    <Button color='teal' content='Wedding Hall' onClick={(venue) => this.getVenues("wedding halls", this.state.location)} />
                                    <Button color='black' content='Parks' onClick={(venue) => this.getVenues("parks", this.state.location)} />
                                    <Button color='grey' content='Hotels' onClick={(venue) => this.getVenues("hotels", this.state.location)} />
                                    <Button color='purple' content='Country Clubs' onClick={(venue) => this.getVenues("country club", this.state.location)} />
                                    <Button color='pink' content='Churches' onClick={(venue) => this.getVenues("churches", this.state.location)} />
                                {/* </Button.Group> */}
                                </div>
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
                        </div>
        )
    }
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Venue);


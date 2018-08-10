import React, { Component} from "react"
import "./Venue.css"
import { Card, Image, Button, Icon } from "semantic-ui-react"
import Scraper from "../../utils/Scraper"


class VenueResults extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoaded: false
        }
    }
    
    render() {
        
    return(
        
    <div className="ui raised link card">
    <div className="content">
    <i className="right floated like icon" onClick={() => this.props.onClick(this.props.name, this.props.phone, this.props.address, this.props.rating, this.props.photo, this.props.url)}></i>
    <div className="header">{this.props.name}</div>
    <a className="image" alt="venue">
        <img  
        src={!(this.props.url === "not provided") ? Scraper.getPhoto(this.props.url) : "http://via.placeholder.com/350x150"}
        className="img"/>
    </a>
    <div className="description">
    Phone: {this.props.phone}
    <br/>
    Address: {this.props.address}
    <br/>
    Rating: {this.props.rating}
    <br/>
    {!(this.props.url === "not provided") ? <a href={this.props.url} target="_blank">Website</a> : "Website not provided"}
    </div>
    </div>
    </div>
    
)}}

export default VenueResults

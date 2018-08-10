import React, { Component } from "react";
import API from "../../utils/API/DecorAPI";
import DB from "../../utils/DB/DecorDB";
import DecorDetail from "./DecorDetail";
import { Dimmer, Loader, Button} from 'semantic-ui-react'
import "./Decor.css"

class Decor extends Component {

    state = {
        results: [],
        isLoaded: false
        
    };

    getDecor = (query) => () => {
        this.setState({ results: [], isLoaded: false})
        API.search(query)
            .then(res => this.setState({ results: res.data.results, isLoaded: true }))
            .catch(err => console.log(err));
            console.log(query)
    }

    componentDidMount() {
        this.setState({ results: [], isLoaded: false})
        API.search("decoration")
            .then(res => this.setState({ results: res.data.results, isLoaded: true }))
            .catch(err => console.log(err));

        
    }

    

    saveDecor = (title, url, photo, price, currency, shop, shopSite) => {
        alert("Extra Saved")
        const savedDecor = {
            title: title,
            url:url,
            photo:photo,
            price:price,
            currency_code:currency,
            shop: shop,
            shopSite: shopSite
        }
        DB.save(savedDecor)
    }

    render() {
        const isLoaded = this.state.isLoaded
        return (
            <div>
                <div>
                    <Button.Group id = "btnGrp" attached='top'>
                        <Button className = "btn" color='yellow' onClick={this.getDecor("decoration")}>
                        Decor</Button>
                        <Button className = "btn" color='teal' onClick={this.getDecor("invitation")}>
                        Invitations
                        </Button>
                        <Button className = "btn" color='blue' onClick={this.getDecor("something_blue")}>
                        Something Blue
                        </Button>
                        <Button className = "btn" color='pink' onClick={this.getDecor("accessories")}>
                        Accessories
                        </Button>

 
                        
                    </Button.Group>
                </div>
                <div className="ui three cards stackable">
                    <Dimmer className={isLoaded ? '' : 'active'}>
                        <Loader>Loading Wedding Extras</Loader>
                    </Dimmer>
                
                {this.state.results.map(res =>
                <DecorDetail
                key={res.url}
                    title={res.title}
                    url= {res.url}
                    photo={res.Images[0].url_170x135}
                    price={res.price}
                    currency={res.currency_code}
                    shop={res.Shop.shop_name}
                    shopSite={res.Shop.url}
                    saveDecor={this.saveDecor}
                />
                )}
            </div>
            </div>
            
        )
    }

}

export default Decor;
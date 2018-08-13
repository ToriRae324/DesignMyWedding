import React, { Component } from "react";
import API from "../../utils/API/DressAPI";
import DB from "../../utils/DB/DressDB"
import DressDetail from "./DressDetail";
import { Dimmer, Loader, Button} from 'semantic-ui-react'
import "./Dress.css"


class Dress extends Component {

    state = {
        results: [],
        isLoaded: false
        
    };

    getDresses = (query) => () => {
        this.setState({ results: [], isLoaded: false})
        API.get(query)
            .then(res => this.setState({ results: res.data.results, isLoaded: true }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.setState({ results: [], isLoaded: false})
        API.get("wedding_gown")
            .then(res => this.setState({ results: res.data.results, isLoaded: true }))
            .catch(err => console.log(err));
    }
    saveDress = (title, url, photo, price, currency, shop, shopSite) =>{
        alert("Clothing Saved")
        const savedDress = {
            title: title,
            url:url,
            photo:photo,
            price:price,
            currency_code:currency,
            shop: shop,
            shopSite: shopSite
        }
        DB.save(savedDress)
    }

    render() {
        const isLoaded = this.state.isLoaded
        return (
           
            <div>
                <div>
                    <Button.Group id = "btnGrp" attached='top'>
                        <Button color='teal' content='Wedding Dresses' onClick={this.getDresses("wedding_gown")}/>
                        <Button color='black' content='Other Dresses' onClick={this.getDresses("dress")}/>
                    </Button.Group>
                </div>
            
                <div className="ui three cards">
                    <Dimmer inverted className={isLoaded ? '' : 'active'}>
                        <Loader inverted>Loading Wedding Clothing</Loader>
                    </Dimmer>

                {this.state.results.map(res =>
                <DressDetail
                key={res.title}
                    title={res.title}
                    url= {res.url}
                    photo={res.Images[0].url_170x135}
                    price={res.price}
                    currency={res.currency_code}
                    shop={res.Shop.shop_name}
                    shopSite={res.Shop.url}
                    saveDress={this.saveDress}
                />
                )}
            </div>
            </div>
            
            
        )
    }

}

export default Dress;
import React, { Component } from "react";
import API from "../../utils/API/DressAPI";
import DB from "../../utils/DB/DressDB"
import DressDetail from "./DressDetail";
import { Dimmer, Loader} from 'semantic-ui-react'


class Dress extends Component {

    state = {
        results: [],
        isLoaded: false
        
    };

    getDresses = () => {
        API.search()
            .then(res => this.setState({ results: res.data.results, isLoaded: true }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getDresses()
    }
    saveDress = (title, url, photo, price, currency, shop, shopSite) =>{
        alert("dress saved")
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
                <div className="ui three cards">
                    <Dimmer className={isLoaded ? '' : 'active'}>
                        <Loader>Loading Wedding Dresses</Loader>
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
            
        )
    }

}

export default Dress;
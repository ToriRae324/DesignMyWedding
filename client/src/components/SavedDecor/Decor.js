import React, { Component } from "react";
import API from "../../utils/API/DecorAPI";
import DB from "../../utils/DB/DecorDB"
import DecorDetail from "./DecorDetail";

class Decor extends Component {

    state = {
        results: [],
        
    };

    getDecor = () => {
        DB.get()
            .then(res => this.setState({ results: res.data}))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getDecor()
    }
    deleteDecor = (id) =>{
        alert("decor deleted, reload to view updated saved decors")
        DB.delete(id)
    }

    render() {
        return (
            <div>Results
                <div className="ui three cards">
                
                {this.state.results.map(res =>
                <DecorDetail
                key={res.title}
                    id={res._id}
                    title={res.title}
                    url= {res.url}
                    photo={res.photo}
                    price={res.price}
                    currency={res.currency_code}
                    shop={res.shot}
                    shopSite={res.shopSite}
                    deleteDecor={this.deleteDecor}
                />
                )}
            </div>
            </div>
        )
    }

}

export default Decor;
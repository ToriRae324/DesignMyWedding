import React, { Component } from "react";
import DB from "../../utils/DB/DecorDB"
import DecorDetail from "./DecorDetail";

class Decor extends Component {

    state = {
        results: [],
        
    };

    getDecor = () => {
        DB.get()
            .then(res => this.setState({ results: res.data.decors}))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getDecor()
    }

    // componentDidUpdate() {
    //     this.getDecor()
    // }


    deleteDecor = (id) =>{
        alert(`Decor Deleted.`)
        DB.delete(id).then(this.getDecor())
        this.getDecor()
    }

    render() {
        return (
            <div>
                <h2 className="title"> My Saved Extras </h2>
                <div className="ui three cards stackable">
                
                {this.state.results.map(res =>
                <DecorDetail
                key={res.title}
                    id={res._id}
                    title={res.title}
                    url= {res.url}
                    photo={res.photo}
                    price={res.price}
                    currency={res.currency_code}
                    shop={res.shop}
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
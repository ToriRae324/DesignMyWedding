import React, { Component } from "react";
import DB from "../../utils/DB/DressDB"
import DressDetail from "./DressDetail";

class Dress extends Component {

    state = {
        results: [],
        
    };

    getDresses = () => {
        DB.get()
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getDresses()
    }

    // componentDidUpdate() {
    //     this.getDresses()
    // }


    deleteDress = (id) =>{
        alert(`Dress Deleted.`)
        DB.delete(id).then(this.getDresses())
        this.getDresses()
    }

    render() {
        return (
        <div>
        <h2 className="title"> My Saved Clothing </h2>
                <div className="ui three cards">
                
                {this.state.results.map(res =>
                <DressDetail
                key={res.title}
                id={res._id}
                    title={res.title}
                    url= {res.url}
                    photo={res.photo}
                    price={res.price}
                    currency={res.currency_code}
                    shop={res.shop}
                    shopSite={res.shopSite}
                    deleteDress={this.deleteDress}
                />
                )}
            </div>
            </div>
        )
    }

}

export default Dress;
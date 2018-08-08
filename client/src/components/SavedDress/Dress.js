import React, { Component } from "react";
import API from "../../utils/API/DressAPI";
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
    deleteDress = (id) =>{
        alert("dress deleted, reload page to see updated page")
        DB.delete(id)
    }

    render() {
        return (
            <div>Results
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
                    shop={res.shot}
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
import React, { Component } from "react";
import API from "../utils/API/";
import DressDetail from "./DressDetail";

class Dress extends Component {

    state = {
        results: [],
      };


    getDresses = () => {
    API.search()
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));
    }

    componentDidMount (

    )
}

export default Dress;
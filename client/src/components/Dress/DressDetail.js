import React from "react";

const DressDetail = props => (
  <div>
    <ul>
    <li>title: {props.title}</li>
    <li>url: {props.url}</li>
    <li>photo: {props.photo}</li>
    <li>price: {props.price} {props.currency}</li>
    <li>currency_code: {props.currency}</li>
    <li>shop: {props.shop}</li>
    </ul>
  </div>
);

export default DressDetail;
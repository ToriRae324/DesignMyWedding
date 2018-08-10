import React from "react";


const DecorDetail = props => (
  <div className="ui raised link card"> 
  <div className="content">
    <i className="right floated trash icon" onClick={() => props.deleteDecor(props.id)}></i>
    <div className="header"><a href={props.url}target="_blank">{props.title}</a></div>
        <a className="image" href={props.url} target="_blank">
        <img src={props.photo} alt="dress"/>
    </a>
    <div className="description">
      <p></p>
    </div>
  </div>
  <div className="extra content">
    <span className="left floated">
        Seller: 
      <a href={props.shopSite} target="_blank"> {props.shop}</a>
    </span>
    <span className="right floated">
            Price: {props.price} {props.currency}
        </span>
  </div>
</div>
);

export default DecorDetail;
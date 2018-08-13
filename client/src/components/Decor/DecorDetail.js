import React from "react";


const DecorDetail = props => (
  <div className="ui link card" style={{"opacity": 0.85,
    "boxShadow": "5px 5px 3px darkgoldenrod"}}> 
  <div className="content">
    <i className="right floated like icon" onClick={() => props.saveDecor(props.title, props.url, props.photo, props.price, props.currency, props.shop, props.shopSite)}></i>
    <div className="header"><a href={props.url}target="_blank">{props.title}</a></div>
        <a className="image"  href={props.url} target="_blank">
        
        <img src={props.photo} alt="dress" className="image"/>
       
    </a>
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
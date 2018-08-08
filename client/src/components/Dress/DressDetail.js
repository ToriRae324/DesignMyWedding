import React from "react";

const DressDetail = props => (
  <div className="ui raised link card"> 
  <div className="content">
    <i className="right floated like icon"></i>
    <div className="header"><a href={props.url}>{props.title}</a></div>
        <a class="image" alt="dress" href={props.url}>
        <img src={props.photo} />
    </a>
    <div className="description">
      <p></p>
    </div>
  </div>
  <div className="extra content">
    <span className="left floated">
        Seller: 
      <a href={props.shopSite}> {props.shop}</a>
    </span>
    <span className="right floated">
            Price: {props.price} {props.currency}
        </span>
  </div>
</div>
);

export default DressDetail;
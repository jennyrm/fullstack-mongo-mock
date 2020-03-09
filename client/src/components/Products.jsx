import React from 'react';
  
const Products = (props) => (
  <div>
    <img src={props.product.image}></img>
    <div onClick={() => props.changeIndexFxn(props.index)}>{props.product.item}</div><br></br>
    <div>Current Bid: ${props.product.curr_bid}</div>
    <div>Original Posting Price: ${props.product.min_cost}</div>
    <div>Bidding Ends in: {props.product.ends_in} day(s)</div>
  </div>
)

export default Products
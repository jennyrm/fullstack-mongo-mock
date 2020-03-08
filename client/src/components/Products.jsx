import React from 'react';
  
const Products = (props) => (
  <div>
    {props.product.item}
    {props.product.min_cost}
    {props.product.curr_bid}
    {props.product.ends_in}
    {props.product.image}
  </div>
)

export default Products
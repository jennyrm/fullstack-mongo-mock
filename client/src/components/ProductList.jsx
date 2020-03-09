import React from 'react';
import Products from './Products';
  
const ProductList = (props) => (
  <div>
   {props.items.map((item, i) => (
     <Products product={item} changeIndexFxn={props.changeIndexFxn} index={i} key={i}/> 
   ))}
  </div>
)

export default ProductList
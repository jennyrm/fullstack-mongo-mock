import React from 'react';
import Products from './Products';
  
const ProductList = (props) => (
  <div>
   {props.items.map((item) => {
     <Products product={item}/>
   })}
  </div>
)

export default ProductList
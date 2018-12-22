import React from 'react';
import ItemButton from './ItemButton.jsx';

const InCart = ({ item, handleChange }) =>
  <div className="item">
    <div className="item-name">
      <span>{item.item}</span>
    </div>
    <ItemButton symbol={"-"} item={item} handleChange={handleChange} status="remove" />
  </div>



export default InCart;

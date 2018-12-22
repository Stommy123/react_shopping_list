import React from 'react';
import ItemButton from './ItemButton.jsx';

const Item = ({ item, handleChange, symbol, status }) =>
  <div className="item">
    <span className="item-name">{ item.item }</span>
    <ItemButton symbol={symbol} item={item} handleChange={handleChange} status={status} />
  </div>

export default Item;

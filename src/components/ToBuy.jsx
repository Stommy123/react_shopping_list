import React from 'react';
import ItemButton from './ItemButton';

const ToBuy = ({ item, handleChange }) =>
    <div className="item">
      <span className="item-name"> {item.item}</span>
      <ItemButton symbol={"+"} item={item} handleChange={handleChange} status="add"  />
    </div>

export default ToBuy;

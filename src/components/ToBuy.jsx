import React from 'react';
import ItemButton from './ItemButton';

const ToBuy = ({ item, handleChange }) =>
    <div className="item">
      <span className="item-name">
        <span>{item.item}</span>
      </span>
      <ItemButton symbol={"+"} item={item} handleChange={handleChange} status="increment"  />
    </div>

export default ToBuy;

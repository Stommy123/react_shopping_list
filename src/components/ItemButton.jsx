import React from 'react';

const ItemButton = ({ item, handleChange, status, symbol }) =>
  <button onClick={() => handleChange(item.id)} className={`item-action ${status}`}>{symbol}</button>

export default ItemButton

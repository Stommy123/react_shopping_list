import React from 'react';
import ItemHeader from './ItemHeader.jsx'
import Item from './Item.jsx'

const ShoppingList = ({ inCart, needToBuy, handleChange }) =>
        <div className="shopping-list">
          <div className="to-buy">
            <ItemHeader title="Need To Buy" />
            { needToBuy.map((item,i) => <Item symbol="+" status="add" item={item} key={i} handleChange={handleChange} /> )}
          </div>
          <div className="cart">
            <ItemHeader title="In Cart" />
            { inCart.map((item, i) => <Item symbol="-" status="remove" item={item} key={i} handleChange={handleChange} /> )}
          </div>
        </div>

export default ShoppingList

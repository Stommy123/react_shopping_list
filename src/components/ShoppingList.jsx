import React from 'react';
import Item from './Item.jsx'

const ShoppingList = ({ inCart, needToBuy, handleChange }) =>
        <div className="shopping-list">
          <div className="to-buy">
            { needToBuy.map((item,i) => <Item symbol="+" status="add" item={item} key={i} handleChange={handleChange} /> )}
          </div>
           <div className="cart">
               { inCart.map((item, i) => <Item symbol="-" status="remove" item={item} key={i} handleChange={handleChange} /> )}
           </div>
        </div>

export default ShoppingList

import React from 'react';
import ItemHeader from './ItemHeader.jsx';
import InCart from './InCart.jsx';
import ToBuy from './ToBuy.jsx';

const ShoppingList = ({ inCart, needToBuy, handleChange }) => {
    return (
        <div className="shopping-list">
          <div className="to-buy">
            <ItemHeader title="To Buy" />
            {needToBuy.map((item,i) => {return (<ToBuy item={item} key={i} handleChange={handleChange} />)})}
          </div>
           <div className="cart">
               <ItemHeader title="Shopping Cart" />
               {inCart.map((item, i) => { return (<InCart item={item} key={i} handleChange={handleChange} />)})}
           </div>
        </div>
    )
}

export default ShoppingList

import React from 'react';
import ItemHeader from './ItemHeader.jsx';
import InCart from './InCart.jsx';
import ToBuy from './ToBuy.jsx';

const ShoppingList = ({ inCart, needToBuy, handleChange }) =>
        <div className="shopping-list">
          <div className="to-buy">
            <ItemHeader title="Need To Buy" />
            { needToBuy.map((item,i) => <ToBuy item={item} key={i} handleChange={handleChange} /> )}
          </div>
           <div className="cart">
               <ItemHeader title="In My Cart" />
               { inCart.map((item, i) => <InCart item={item} key={i} handleChange={handleChange} /> )}
           </div>
        </div>

export default ShoppingList

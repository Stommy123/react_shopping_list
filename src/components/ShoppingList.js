import React from 'react';
import InCart from './InCart';
import ToBuy from './ToBuy';

const ShoppingList = ({ inCart, needToBuy }) => {
    return (
        <div>
           <div>
               {inCart.map((item, i) => { return (<InCart item={item} key={i} />)})}
           </div>
           <div>
               {needToBuy.map((item,i) => {return (<ToBuy item={item} key={i} />)})}
           </div>
        </div>
    )
}

export default ShoppingList
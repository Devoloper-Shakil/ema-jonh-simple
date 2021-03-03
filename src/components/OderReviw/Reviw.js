import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviw = () => {
    const [card,setCart]= useState([]);
    useEffect(()=>{
        const savedCard=getDatabaseCart();
        const prodectKes = Object.keys(savedCard);
        const cartProdects= prodectKes.map(key=>{
            const prodect= fakeData.find(pd=>pd.key===key);
            prodect.quanintty= savedCard[key];
            return prodect;
        })
        // console.log(cartProdects)
        setCart(cartProdects);
    })
    return (
        <div>
          <h1> cart item: {card.length}</h1>
          {
              card.map(pd =><ReviewItem prodect={pd}></ReviewItem>)
          }
            
        </div>
    );
};

export default Reviw;
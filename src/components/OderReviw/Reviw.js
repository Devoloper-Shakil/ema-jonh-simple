import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import palceOcer from '../../../src/images/giphy.gif'

const Reviw = () => {
    const [card,setCart]= useState([]);
    const [oderPlace,setOderPlace]= useState(false);
  
  const palceOder=()=>{
      console.log("palceOder")
      setCart([]);
      setOderPlace(true);
      processOrder();
  }
   
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
        
    },[]);
    let tahnkyou;
    if(oderPlace)
    {
        tahnkyou= <img src={palceOcer} alt=""/>
    }
    const removeItem=(productke)=>{
        // console.log("Removing",productke);
        const newCard= card.filter(pd=>pd.key !==productke)
        setCart(newCard);
        removeFromDatabaseCart(productke); 
    }
    
    return (
        <div className="prodect-contener" >
      
        
        <div className="prodects-info">
        {
              card.map(pd =><ReviewItem 
                key={pd.key}
                removeItem={removeItem}
                 prodect={pd}>
                     
                 </ReviewItem>)
          }
          {
              tahnkyou
          }
        </div>
        <div className="shop-card">
            <Cart cart={card}>
            <button onClick={palceOder} className="mane-btn">Places oder</button>
            </Cart>
        </div>
         

         
            
        </div>
    );
};

export default Reviw;
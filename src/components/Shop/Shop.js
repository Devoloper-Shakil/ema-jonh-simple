import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Prodect from '../Prodect/Prodect';
import './Shop.css';

const Shop = () => {
    const fast10 =fakeData.slice(0,10);
   const [products , setProducts]=useState(fast10);
   const [ cart,setCart]= useState([]);
   const addHendeler=(prodect)=>{
    //    console.log("add addd add", prodect);
       const newCart= [...cart, prodect];
       setCart(newCart);
       const sameProdect= newCart.filter( pd =>pd.key===prodect.key);
       const count=sameProdect.length;
       addToDatabaseCart(prodect.key,count);
  
   };
   
  
    return (
       
        <div className="shop-contener">
            <div className="prodect-conteainer">
                {
                    products.map(pd=><Prodect AddToCard={true} key={pd.key} prodect={pd} addHendeler={addHendeler}></Prodect>)
                }
                 
            </div>
             <Cart cart={cart}></Cart>
            
           
           
        </div>
    );
};

export default Shop;
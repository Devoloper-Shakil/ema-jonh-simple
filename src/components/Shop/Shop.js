import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Prodect from '../Prodect/Prodect';
import './Shop.css';

const Shop = () => {
    const fast10 =fakeData.slice(0,10);
   const [products , setProducts]=useState(fast10);
   const [ cart,setCart]= useState([]);
   const addHendeler=(prodect)=>{
       console.log("add addd add", prodect);
       const newCart= [...cart, prodect];
       setCart(newCart);
  
   };
   
  
    return (
       
        <div className="shop-contener">
            <div className="prodect-conteainer">
                {
                    products.map(pd=><Prodect prodect={pd} addHendeler={addHendeler}></Prodect>)
                }
                 
            </div>
             <Cart cart={cart}></Cart>
            
           
           
        </div>
    );
};

export default Shop;
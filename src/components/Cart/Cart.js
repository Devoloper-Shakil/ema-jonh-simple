import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart 
    const trottal= (cart. reduce( (tottal, prd) =>tottal+prd.price,0)).toFixed(2);
     const text = (trottal/10). toFixed(2)

     let shipping=0;
     if(trottal>50){
        shipping= 10;
     }
     const total =(Number(trottal)+Number(text)+Number(shipping)).toFixed(2);
     console.log(total);
     

    return (
        <div className="cart">
            <div className="shop-card">
             <h2>Shopping summary</h2>
                <h3>Items oders: {props.cart.length }</h3>
                <h3>Price: {trottal}</h3>
                <h3> Shipping:{shipping}</h3>
                <h3>Text:{text}</h3>
                <h2>Trotal :{total}</h2>

                </div>
           
        </div>
    );
};

export default Cart;
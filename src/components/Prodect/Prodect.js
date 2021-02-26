import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Prodect.css'

const Prodect = (props) => {
    const {img,name,seller,price,star}=props.prodect;
    console.log(props.prodect)
    
    return (
        <div className="prodect-contener">
            <div className="prodect">
                <img src={img} alt=""/>

            </div>
            <div className="prodects-info" >
                <h2 className="prodect-name">{name} </h2>
                <br/>
                <p>by: {seller}</p>
                <h4>price: ${price}</h4>
                <p>only {star}left in stock - order soon</p>
                <button className="mane-btn" onClick={()=>props.addHendeler(props.prodect)}> <FontAwesomeIcon icon={faShoppingCart} /> 
                    Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Prodect;
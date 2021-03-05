import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Prodect.css'
import { Link } from 'react-router-dom';

const Prodect = (props) => {
//  console.log(props)
    const {img,name,seller,price,star,category}=props.prodect;
   
    
    return (
        <div className="prodect-contener">
            <div className="prodect">
                <img  src={img} alt=""/>

            </div>
            <div className="prodects-info" >
                <h2 className="prodect-name"><Link to={"/category/"+category}>{name} </Link></h2>
                <br/>
                <p>by: {seller}</p>
                <h4>price: ${price}</h4>
                <p>only {star}left in stock - order soon</p>
            {props.AddToCard &&<button className="mane-btn" onClick={()=>props.addHendeler(props.prodect)}> <FontAwesomeIcon icon={faShoppingCart} /> 
                Add to Cart</button>}
            </div>
            
        </div>
    );
};

export default Prodect;
import React from 'react';

const ReviewItem = (props) => {
    
    
    const{ name,quanintty,img,key,price}=props.prodect;
 
    return (
        <div className="prodect-contener"> 
            <div className="prodects-info" >
            <h1 className="prodect-name">{name}</h1>
            <p>quanintty:{quanintty}</p>
            <h4>Price: ${price}</h4>
            <img className="prodect" src={img} alt=""/>
            <button className="mane-btn" onClick={()=>props.removeItem(key)}>Remove Item</button>
        </div>
        </div>
    );
};

export default ReviewItem;
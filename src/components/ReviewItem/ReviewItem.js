import React from 'react';

const ReviewItem = (props) => {
    const{ name,quanintty,img}=props.prodect;
    console.log(props);
    return (
        <div>
            <h1>{name}</h1>
            <p>quanintty:{quanintty}</p>
            <img src={img} alt=""/>
            <button className="mane-btn">Remove Item</button>
        </div>
    );
};

export default ReviewItem;
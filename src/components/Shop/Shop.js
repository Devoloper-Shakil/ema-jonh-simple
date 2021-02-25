import React, { useState } from 'react';
import fakeData from '../../fakeData';

const shop = () => {
    const fast10 =fakeData.slice(0,10);
   const [products , setProducts]=useState(fast10);

   
 

 
  
    return (
        <div>
            <h3>shonar bangla</h3>
            <h1>{fast10.name}</h1>
        </div>
    );
};

export default shop;
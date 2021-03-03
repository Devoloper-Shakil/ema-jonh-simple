import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Prodect from '../Prodect/Prodect';


const ProdactDetels = () => {
    const {category}= useParams();
    const prodect= fakeData.find(pd=>pd.category===category);
    console.log(prodect)
    return (
        <div>
            <h1>  youer prodect detels </h1>
            <Prodect AddToCard={false} prodect={prodect}></Prodect>
            
        </div>
    );
};

export default ProdactDetels;
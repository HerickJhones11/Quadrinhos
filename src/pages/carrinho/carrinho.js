import React from 'react';
import {useEffect, useState} from "react";

export default function Carrinho() {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        //CHAMADA PARA API
        // APÓS seta os produtos setProducts(value)
    },[])
    
    return (
        <>
            <p>Seus produtos</p>
        </>
    )
}
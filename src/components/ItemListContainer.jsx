import {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ItemList } from './ItemList';
import	data from '../data/products.json';


export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        get.then ((data) => {
            if(id){
                const filteredData = data.filter (d => d.category === id);
                setProducts(filteredData);
            } else {
                setProducts(data);
            }             
        });
    },[id]);

    return (
        <Container className='container' >
            {products !== null && <ItemList products={products}/>}
        </Container>
    )
};
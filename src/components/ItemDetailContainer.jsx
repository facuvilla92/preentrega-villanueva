import {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {ItemList } from './ItemList';
import	data from '../data/products.json';


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        get.then ((data) => {
                const filteredData = data.find (d => d.id === id);
                setProduct(filteredData);
            }            
        );
    },[id]);

    if (!product) return null;
    return (
        <Container className='container' >
            <Card>
                <Card.Img variant="top" src={product.pictureUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <Card.Text>$
                    {product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
};
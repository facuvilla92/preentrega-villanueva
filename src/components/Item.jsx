import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom';

export const Item = ({product}) => {
    return(
    <Card>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button className= "button" variant="primary">Ver Producto</Button></Link>
      </Card.Body>
    </Card>
  );
}
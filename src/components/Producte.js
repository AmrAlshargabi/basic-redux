import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Producte({ id, title, price, description, image }) {
    return (
        <div className='col'>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '300px' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                    <Link to={`/Productes/${id}`} className="button-primary">Ditales</Link>
                </Card.Body>
            </Card>
        </div>

    )
}
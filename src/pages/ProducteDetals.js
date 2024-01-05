import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useGetProducteQuery } from "../rtk/Slices/apiSlice";



export default function ProducteDetals() {
    const producte = useLoaderData();

    const {
        data: producteDetals,
        isError,
        error,
        isLoading,
        isSuccess
    } = useGetProducteQuery(producte.producteid);


    return (
        <>
            {isLoading && <p> isLoading.....</p>}
            {isError && <p> isError.....{error.error}</p>}
            {isSuccess && <h3> Producte Detals {producte.producteid}</h3>}

            <Card style={{ width: '100rem' }}>
                <Card.Img style={{ height: '500px' }} variant="top" src={producteDetals?.image} />
                <Card.Body>
                    <Card.Title>{producte?.title}</Card.Title>
                    <Card.Text>
                        {producteDetals?.description}
                    </Card.Text>
                    <Card.Text>
                        {producteDetals?.price}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export async function loader({ params }) {
    return params;
}
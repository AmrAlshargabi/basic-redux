import { Container } from "react-bootstrap";
import Producte from "./Producte";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductes } from "../rtk/Slices/ProducteSlice";

export default function ProductesList() {
    const productes = useSelector((state) => state.productes);
    const despatch = useDispatch();

    useEffect(() => {
        despatch(fetchProductes())
    }, [despatch]);
    return (
        <Container>
            <div className='row'>
                {
                    productes.map((producte) => {
                        return (
                            <Producte
                                key={producte.id}
                                id={producte.id}
                                title={producte.title}
                                description={producte.description}
                                price={producte.price}
                                image={producte.image}
                            />
                        )
                    })
                }
            </div>
        </Container>
    )
}
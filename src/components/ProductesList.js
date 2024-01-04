import { Container } from "react-bootstrap";
import Producte from "./Producte";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProductes } from "../rtk/Slices/ProducteSlice";
import { useGetProductesQuery } from "../rtk/Slices/apiSlice";

export default function ProductesList() {
    const {
        data: productes,
        isError,
        error,
        isLoading,
        isSuccess
    } = useGetProductesQuery();
    //  productes Slice
    // const productes = useSelector((state) => state.productes);
    // const despatch = useDispatch();
    // useEffect(() => {
    //     despatch(fetchProductes())
    // }, [despatch]);
    return (
        <Container>
            <div className='row'>
                {isLoading && <p> isLoading.....</p>}
                {isError && <p> isError.....{error.error}</p>}
                {isSuccess && <p> {productes.length}.....</p>}
                {
                    productes?.map((producte) => {
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
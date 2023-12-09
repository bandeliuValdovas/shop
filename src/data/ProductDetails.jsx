import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



const ProductDetails = () => {
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((data) => {
                setItem(data.data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, [id]);


    if (isLoading) {
        return <div>DATA IS LOADING</div>;
    }

    const { title, price, stock } = item;

    return (
        <>
            <div>title {title}</div>
            <div>price {price}</div>
            <div>stock {stock}</div>


        </>
    )
}

export default ProductDetails;
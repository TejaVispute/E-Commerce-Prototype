import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useData } from '../Context/DataContext';
import { useCart } from '../Context/CartContext';
import { useCartProcuctContext } from '../Context/CartProductsContext'
function ProductDetails() {
    let { cartItem, setCartItem } = useCart();


    let { Data } = useData();
    let { dataID } = useParams();
    let newData = Data.find((value) => value.mobile === dataID);

    return (
        <div className='data-details' style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div className='mt-4' style={{ width: "80%", border: "1px solid black", padding: "1rem" }}>
                <div>{newData.mobile}</div>
                <img style={{ width: "50%" }} src={newData.image} alt="" />
                <div>{newData.price} /-</div>
                <div>{newData.description}</div>
                <button className='btn btn-danger mt-2 mx-2' >Add to Cart</button>
                <button className='btn btn-success mt-2'><Link style={{ color: "white", textDecoration: "none" }} to='/'>Go Back</Link></button>
            </div>
        </div>
    )
}

export default ProductDetails;
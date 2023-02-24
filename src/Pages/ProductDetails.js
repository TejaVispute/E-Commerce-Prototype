import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useData } from '../Context/DataContext';
import { useCart } from '../Context/CartContext';
import { useCartProcuctContext } from '../Context/CartProductsContext'
function ProductDetails() {
    let { cartItem, setCartItem } = useCart();
    let { cartProduct, setCartProduct } = useCartProcuctContext();
    // console.log(cartProduct)

    let { Data } = useData();
    let { dataID } = useParams();
    let newData = Data.find((value) => value.mobile === dataID);

    let [buttonDisable, setButtonDisabled] = useState(true);

    function setDataToCart() {
        setCartProduct([
            ...cartProduct,
            {
                Id: newData.ID,
                mobile: newData.mobile,
                price: newData.price,
                description: newData.description,
                image: newData.image
            }])
        setCartItem((prev) => prev + 1);

        setButtonDisabled((prev) => !prev);

    }
    return (
        <div className='data-details' style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div className='mt-4' style={{ width: "80%", border: "1px solid black", padding: "1rem" }}>
                <div>{newData.mobile}</div>
                <img style={{ width: "50%" }} src={newData.image} alt="" />
                <div>{newData.price} /-</div>
                <div>{newData.description}</div>
                {
                    buttonDisable && <button className='btn btn-danger mt-2 mx-2'
                        onClick={setDataToCart}>Add to Cart</button>
                }
                {
                    !buttonDisable && <button className='btn btn-danger mt-2 mx-2' disabled
                        onClick={setDataToCart}>aleready in cart</button>
                }
                <button className='btn btn-success mt-2'><Link style={{ color: "white", textDecoration: "none" }} to='/'>Go Back</Link></button>

                <button className='btn btn-primary mt-2 mx-2' ><Link style={{ color: "white", textDecoration: "none" }} to='/cart'>Go to Cart</Link></button>
            </div>
        </div >
    )
}

export default ProductDetails;
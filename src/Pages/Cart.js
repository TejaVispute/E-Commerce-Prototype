import { useCart } from "../Context/CartContext";
import { useCartProcuctContext } from "../Context/CartProductsContext";

const Cart = () => {
    let { cartItem, setCartItem } = useCart();
    let { cartProcuct, setCartProduct } = useCartProcuctContext();

    // console.log(cartProcuct);

    return (
        <>
            <h1>Items in cart are {cartItem}</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {cartProcuct.map((currItem) => (
                    <div className="Product-cart" style={{ width: "50%" }}>
                        <div className="mobile">{currItem.mobile}</div>
                        <div style={{ width: "100%" }}>
                            <img style={{ width: "100%" }} src={currItem.image} alt="" />
                        </div>
                        <div className="mobile">{currItem.price}</div>
                        <div className="mt-2">
                            <button
                                onClick={() => setCartItem((prev) => prev + 1)}
                                className="btn btn-secondary mx-1">+</button>
                            <button onClick={() => setCartItem((prev) => prev - 1)}
                                className="btn btn-secondary mx-1">-</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cart;

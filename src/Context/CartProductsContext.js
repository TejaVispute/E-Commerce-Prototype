import { createContext, useContext, useState } from "react";

let CartProductContext = createContext();


function CartProductContextProvider({ children }) {
    let [cartProduct, setCartProduct] = useState([]);

    return (
        <CartProductContext.Provider value={{ cartProduct, setCartProduct }}>{children}</CartProductContext.Provider>
    )
}

let useCartProcuctContext = () => useContext(CartProductContext);

export { CartProductContextProvider, useCartProcuctContext }
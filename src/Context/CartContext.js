import { createContext, useContext, useState } from "react";

let CreateCart = createContext();

function CreateCartProvider({ children }) {
    let [cartItem, setCartItem] = useState(0);
    
    if (cartItem < 0) {
        setCartItem(0);
    }
    return (
        <CreateCart.Provider value={{ cartItem, setCartItem }}>{children}</CreateCart.Provider>
    )
}

let useCart = () => useContext(CreateCart);


export { useCart, CreateCartProvider }
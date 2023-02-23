import { createContext, useContext, useState } from "react";

let CartProductContext = createContext();


function CartProductContextProvider({ children }) {
    let [cartProcuct, setCartProduct] = useState([
        {
            Id: 1,
            mobile: "MI",
            price: 11999,
            description: "Redmi Note 11 Pro 5G - Xiaomi Global Official. Smoother, faster and more efficientFor those who want the ultimate experienc Snapdragon® 695 5G processor is ready. 5G ArrivedChange the way you experience and share content with the power of 5G speed",
            image: "https://i02.appmifile.com/11_operator_in/23/04/2021/a3fa26aeb0a0e8ae38f38fb311d644e8.png"
        }
    ]);

    return (
        <CartProductContext.Provider value={{ cartProcuct, setCartProduct }}>{children}</CartProductContext.Provider>
    )
}

let useCartProcuctContext = () => useContext(CartProductContext);

export { CartProductContextProvider, useCartProcuctContext }
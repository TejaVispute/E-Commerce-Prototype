import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

function LoginContextProvider({ children }) {
    const [isLogIn, setisLogIn] = useState(true);

    return (
        <LoginContext.Provider value={{ isLogIn, setisLogIn }}>{children}</LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext);


export { LoginContextProvider, useLogin }
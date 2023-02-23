import { createContext, useContext } from "react";
import { Data } from "../Product Data/Data";
const dataContext = createContext();


function DataContextProvider({ children }) {
    // console.log(Data);
    return (
        <dataContext.Provider value={{ Data }}>{children}</dataContext.Provider>
    )
}

const useData = () => useContext(dataContext);

export { DataContextProvider, useData }
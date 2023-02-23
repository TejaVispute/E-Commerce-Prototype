import { Navigate } from "react-router-dom"

// import { useLogin } from "../Context/LoginContext";


function CheckAuth({ children, isLogIn }) {
    return isLogIn ? children : <Navigate to='/login' replace />
}

export default CheckAuth;
import { NavLink } from 'react-router-dom'
import { useLogin } from '../Context/LoginContext';
import { useCart } from '../Context/CartContext';
const Navbar = () => {
    const { isLogIn, setisLogIn } = useLogin();
    let { cartItem } = useCart();
    return (
        <div className="Navbar mt-4">
            <div>
                <NavLink className="link" to="/">
                    <button className='btn btn-primary'>Home</button>
                </NavLink>
            </div>
            <div> <NavLink className="link" to="/cart">
                <button type="button" className="btn btn-primary position-relative">
                    <i class="fa-solid fa-cart-shopping"></i> Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItem}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
            </NavLink></div>
            <div><NavLink className="link" to="/private">
                <button className='btn btn-primary'>
                    Private
                </button>
            </NavLink></div>

            <div>
                <button className='btn btn-primary' onClick={() => setisLogIn((prev) => !prev)}>{isLogIn ? "Logout" : "Login"}</button>
            </div>

        </div>
    )
}

export default Navbar;
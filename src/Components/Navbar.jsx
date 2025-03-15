import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/login">Login</Link>  | <Link to="/register">Register</Link> | <Link to="/dashboard">Dashboard</Link>
                | <Link to="/notfound">Not Found</Link>
            </nav>
        </div>
    );
};

export default Navbar;

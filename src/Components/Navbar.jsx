import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed top-5 w-full right-5">
            <nav>
                <Link to="/">Home</Link> | <Link to="/auth">Login/Register</Link> | <Link to="/dashboard">Dashboard</Link>
                | <Link to="/notfound">Not Found</Link>
            </nav>
        </div>
    );
};

export default Navbar;

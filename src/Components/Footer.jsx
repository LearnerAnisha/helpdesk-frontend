import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-5 text-center">
            <p>© {new Date().getFullYear()} HelpDesk - All Rights Reserved.</p>
            <div className="mt-2">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white mr-3">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </div>
        </footer>
    );
};

export default Footer;

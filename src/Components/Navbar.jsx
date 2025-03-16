import { Link } from "react-router-dom";
import clsx from "clsx"; // Import clsx for class merging

const Navbar = ({
    logo = "Help Desk!",
    links = [{ name: "Home", path: "/" }, { name: "Authorize", path: "/auth" }],
    classes = ""
}) => {
    return (

        <nav className={clsx("fixed top-3 left-[50%] translate-x-[-50%] w-full sm:w-[60vw] h-[50px] sm:h-[70px] flex items-center justify-between !px-2 !sm:px-10  shadow-lg backdrop-blur-[5px] bg-[rgba(255,255,255,0.2)] rounded-md", classes)}>
            {logo && <Link to="/" className="text-xl font-semibold sm:w-[30%]">{logo}</Link>}
            <div className="grow flex justify-end gap-9">
                {links
                    .filter(link => link.name && link.path) // Ensure valid links
                    .map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="hover:text-blue-300 transition-colors"
                        >
                            {link.icon} {link.name}
                        </Link>
                    ))
                }
            </div>
        </nav>

    );
};

export default Navbar;

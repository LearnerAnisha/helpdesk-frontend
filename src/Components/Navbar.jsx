import { Link } from "react-router-dom";
import clsx from "clsx";

const Navbar = ({
    logo = "Help Desk!",
    links = [{ name: "Home", path: "/" }, { name: "Authorize", path: "/auth" }],
    classes = "",
    scrollToSection,
}) => {
    return (
        <nav className={clsx(
            "fixed top-3 left-[50%] translate-x-[-50%] w-[90vw] sm:w-[60vw] h-[50px] sm:h-[70px] flex items-center justify-between !px-2 sm:!px-10 shadow-lg backdrop-blur-[5px] bg-[rgba(255,255,255,0.2)] rounded-md",
            classes
        )}>
            {logo && <Link to="/" className="sm:text-xl font-semibold sm:w-[30%]">{logo}</Link>}

            <div className="grow flex justify-end gap-2 text-[12px] sm:text-[18px] sm:gap-9">
                {links.map((link, index) =>
                    link.ref ? (
                        // Scroll to section when clicking
                        <button
                            key={index}
                            onClick={() => scrollToSection(link.ref)}
                            className="hover:text-blue-300 transition-colors"
                        >
                            {link.icon} {link.name}
                        </button>
                    ) : (
                        // Navigate normally
                        <Link
                            key={index}
                            to={link.path}
                            className="hover:text-blue-300 transition-colors"
                        >
                            {link.icon} {link.name}
                        </Link>
                    )
                )}
            </div>
        </nav>
    );
};

export default Navbar;

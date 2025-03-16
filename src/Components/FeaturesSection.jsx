import { Link } from "react-router-dom";

const features = [
    { title: "Submit Ticket", path: "/create-ticket" },
    { title: "Live Chat", path: "/live-chat" },
    { title: "FAQs", path: "/faq" },
];

const FeaturesSection = () => {
    return (
        <div className="w-full h-[100dvh] sm:h-[50dvh] grid grid-cols-1 sm:grid-cols-3 gap-6  justify-center text-center py-10">
            {features.map((feature, index) => (
                <Link key={index} to={feature.path} className="primary-bg p-6 shadow-lg rounded-lg w-[80vw] !mx-auto h-[30dvh] sm:w-full sm:h-full ">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                </Link>
            ))}
        </div>
    );
};

export default FeaturesSection;

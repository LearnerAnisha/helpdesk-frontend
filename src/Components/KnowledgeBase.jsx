import { useState } from "react";
import { Link } from "react-router-dom";

const articles = [
    { title: "How to reset password?", path: "/articles/reset-password" },
    { title: "How to submit a ticket?", path: "/articles/submit-ticket" },
];

const KnowledgeBase = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="absolute_center flex-col !h-[50vh]">
            <h2 className="text-2xl font-bold !mb-3">Knowledge Base</h2>
            <input
                type="text"
                placeholder="Search articles..."
                className="outline-none !px-4 !py-1 bg-[rgba(255,255,255,0.5)]  border-none rounded w-64 !mb-3"
                onChange={(e) => setQuery(e.target.value)}
            />
            <div class="!space-y-2 text-[13px] sm:text-[15px] text-center w-full h-[20dvh]">
                {articles
                    .filter((article) => article.title.toLowerCase().includes(query.toLowerCase()))
                    .map((article, index) => (
                        <p key={index}>
                            <Link to={article.path} className="text-gray-700">{article.title}</Link>
                        </p>
                    ))}
            </div>
        </div>
    );
};

export default KnowledgeBase;

import React, { useRef } from "react";
import Home from "../pages/Home";
import FeaturesSection from "./FeaturesSection";
import RecentTickets from "./RecentTickets";
import KnowledgeBase from "./KnowledgeBase";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
    const homeRef = useRef(null);
    const featuresRef = useRef(null);
    const ticketsRef = useRef(null);
    const knowledgeRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    const links = [
        {
            name: "Home",
            ref: homeRef
        },
        {
            name: "Features",
            ref: featuresRef
        },
        {
            name: "Tickets",
            ref: ticketsRef
        },
        {
            name: "Login",
            path: "/auth"
        }
        //  {
        //     name: "KnowledgeBase",
        //     ref: knowledgeRef
        // },
        // {
        //     name: "Footer",
        //     ref: footerRef
        // }
    ]
    return (
        <>
            <Navbar scrollToSection={scrollToSection} links={links} />
            <div ref={homeRef}><Home /></div>
            <div ref={featuresRef}><FeaturesSection /></div>
            <div ref={ticketsRef}><RecentTickets /></div>
            <div ref={knowledgeRef}><KnowledgeBase /></div>
            <div ref={footerRef}><Footer /></div>
        </>
    );
};

export default Layout;

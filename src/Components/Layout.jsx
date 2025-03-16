import React from 'react'
import Home from '../pages/Home'
import FeaturesSection from './FeaturesSection'
import RecentTickets from './RecentTickets'
import KnowledgeBase from './Knowledgebase'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <Home />
            <FeaturesSection />
            <RecentTickets />
            <KnowledgeBase />
            <Footer />
        </>
    )
}

export default Layout
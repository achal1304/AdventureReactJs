import React from 'react'
import Cards from '../Cards'
import HeroSection from '../HeroSection'
import Navbar from '../Navbar'

function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Cards />
        </div>
    )
}

export default Home
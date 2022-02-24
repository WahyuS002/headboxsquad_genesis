import React from 'react'
import Footer from '../components/Footer'
import About from '../components/Homepage/About'
import FAQ from '../components/Homepage/FAQ'
import Hero from '../components/Homepage/Hero'
import Roadmap from '../components/Homepage/Roadmap'
import SpreadTheBox from '../components/Homepage/SpreadTheBox'
import Team from '../components/Homepage/Team'
import Traits from '../components/Homepage/Traits'
import WhyBuy from '../components/Homepage/WhyBuy'
import Navbar from '../components/Homepage/Navbar'

export default function Home() {
    return (
        <div>
            <div className="relative">
                <div className="absolute max-w-full inset-0 -z-20 min-h-[110vh] bg-no-repeat bg-[url('./assets/homepage_hero.svg')] md:bg-cover bg-top">
                    <Navbar />
                    <Hero />
                </div>
            </div>
            <div className="min-h-screen"></div>
            <div className="md:mt-36">
                <About />
            </div>
            <div className="mt-36">
                <WhyBuy />
            </div>
            <div className="mt-32">
                <Roadmap />
            </div>
            <div className="mt-80">
                <Traits />
            </div>
            <div className="mt-32 md:mt-52">
                <SpreadTheBox />
            </div>
            <div className="mt-32 md:mt-52">
                <Team />
            </div>
            <div className="mt-32 md:mt-52">
                <FAQ />
            </div>
            <div className="mt-32 md:mt-52">
                <Footer />
            </div>
        </div>
    )
}

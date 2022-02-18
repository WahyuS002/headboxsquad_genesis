import React from 'react'
import Content from '../components/Comic/Content'
import Hero from '../components/Comic/Hero'
import Navbar from '../components/Comic/Navbar'
import Footer from '../components/Footer'

export default function Comic() {
    return (
        <div>
            <div className="relative">
                <div
                    className="absolute max-w-full inset-0 -z-20 bg-no-repeat bg-[url('./assets/comic_hero.svg')] md:bg-cover"
                    style={{
                        height: '23.125rem',
                    }}
                ></div>
            </div>
            <div>
                <Navbar />
                <Hero />
            </div>
            <div className="mt-36 mx-20">
                <Content />
            </div>
            <div className="mt-36">
                <Footer />
            </div>
        </div>
    )
}

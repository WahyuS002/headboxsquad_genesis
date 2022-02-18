import Navbar from './components/Navbar'
import Hero from './components/Homepage/Hero'
import About from './components/Homepage/About'
import WhyBuy from './components/Homepage/WhyBuy'
import Roadmap from './components/Homepage/Roadmap'
import Traits from './components/Homepage/Traits'
import SpreadTheBox from './components/Homepage/SpreadTheBox'
import Team from './components/Homepage/Team'
import FAQ from './components/Homepage/FAQ'
import Footer from './components/Footer'

function App() {
    return (
        <div className="font-grandstander overflow-hidden">
            <div className="relative">
                <div className="absolute max-w-full inset-0 -z-20 min-h-screen bg-no-repeat bg-[url('./assets/hero.svg')] md:bg-cover"></div>
            </div>
            <div className="min-h-screen">
                <Navbar />
                <Hero />
            </div>
            <div className="mt-28 mx-20">
                <About />
            </div>
            <div className="mt-36">
                <WhyBuy />
            </div>
            <div className="mt-80">
                <Roadmap />
            </div>
            <div className="mt-80">
                <Traits />
            </div>
            <div className="mt-80">
                <SpreadTheBox />
            </div>
            <div className="mt-80">
                <Team />
            </div>
            <div className="mt-80">
                <FAQ />
            </div>
            <div className="mt-80">
                <Footer />
            </div>
        </div>
    )
}

export default App

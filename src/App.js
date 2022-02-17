import Hero from './components/Homepage/Hero'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className="font-grandstander">
            <div className="relative">
                <div className="absolute max-w-full inset-0 -z-20 min-h-screen bg-no-repeat bg-[url('../public/assets/hero.svg')]"></div>
            </div>
            <Navbar />
            <Hero />
        </div>
    )
}

export default App

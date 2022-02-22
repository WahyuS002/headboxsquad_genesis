import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Comic from './pages/Comic'
import Home from './pages/Home'

function App() {
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    const fillerStye = {
        width: `${progress}%`,
        transition: 'width 4s ease-in-out',
    }

    const updateProgressHandler = setInterval(() => {
        if (progress >= 100) {
            setProgress(100)
            clearInterval(updateProgressHandler)
        }
        setProgress((s) => s + 1)
    }, 50)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

    return (
        <div className="font-grandstander overflow-hidden">
            {loading ? (
                <div className="h-screen bg-[#9C92FF]">
                    <div className="flex h-screen">
                        <div className="m-auto">
                            <p className="text-3xl font-semibold text-white text-center mb-3 animate-squiggly">Please Wait...</p>
                            <div className="w-72 bg-gray-200 h-4 rounded-full outline outline-gray-800">
                                <div className="rounded-full bg-[#FAAE66] h-4" style={fillerStye}></div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/comics" element={<Comic />} />
                </Routes>
            )}
        </div>
    )
}

export default App

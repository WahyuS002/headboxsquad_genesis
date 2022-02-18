import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Comic from './pages/Comic'
import Home from './pages/Home'

function App() {
    return (
        <div className="font-grandstander overflow-hidden">
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/comics" element={<Comic />} />
            </Routes>
        </div>
    )
}

export default App

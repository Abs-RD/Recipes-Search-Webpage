// need to install npm install react-router-dom

import './App.css';
import Navbar from './components/Navbar/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Recipes from './components/Recipes';
import ContactUs from './components/contactUs';

function App() {
    return (
        <Router>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Recipes" element={<Recipes />} />
                <Route path="/contactUs" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;

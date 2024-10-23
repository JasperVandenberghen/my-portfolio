import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './components/home/home';
import Layout from './components/layout/layout';
import About from './components/about/about';
import Contact from './components/contact/contact';

function App () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

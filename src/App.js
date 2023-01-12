import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './components/home/home';
import Layout from './components/layout/layout';

function App () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

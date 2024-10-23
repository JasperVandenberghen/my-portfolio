import './layout.scss';

import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;

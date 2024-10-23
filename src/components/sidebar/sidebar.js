import './sidebar.scss';

import { Link, NavLink } from 'react-router-dom';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import headshot from '../../assets/images/headshot.png';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={headshot} alt='logo' className='logo-image' />
            </Link>
            <nav>
                <NavLink className={({ isActive }) =>
                    (isActive ? 'active' : 'home')} to='/'>
                    <FontAwesomeIcon id='navIcon' icon={faHome} />
                </NavLink>
                <NavLink className={({ isActive }) =>
                    (isActive ? 'active' : 'about')} to='/about'>
                    <FontAwesomeIcon id='navIcon' icon={faUser} color='#fff'/>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    (isActive ? 'active' : 'contact')} to='/contact'>
                    <FontAwesomeIcon id='navIcon' icon={faEnvelope} color='#fff'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' id='linkedin' href='https://www.linkedin.com/in/jasper-vandenberghen-a029b6103/'>
                        <FontAwesomeIcon id='socIcon' icon={faLinkedin} color='#fff'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' id='linkedin' href='https://github.com/JasperVandenberghen'>
                        <FontAwesomeIcon id='socIcon' icon={faGithub} color='#fff'/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

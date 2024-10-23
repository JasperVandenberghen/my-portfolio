import './home.scss';

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        return setLetterClass('text-animate-hover');
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        &nbsp;
                        <span className={`${letterClass} _14`}>a</span>
                        <span className={`${letterClass} _15`}>m</span>
                        &nbsp;
                    </h1>
                    <h2>Full stack developer</h2>
                    <Link to="/contact" className="flat-button">
            CONTACT ME
                    </Link>
                </div>
            </div>

            <Loader active type="pacman" />

        </>
    );
};

export default Home;

import './home.scss';

import { useEffect, useState } from 'react';

import AnimatedLetters from '../animations/animations';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['j', 'a', 's', 'p', 'e', 'r'];
    const jobArray = [
        's',
        'o',
        'f',
        't',
        'w',
        'a',
        'r',
        'e',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.'
    ];

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
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
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

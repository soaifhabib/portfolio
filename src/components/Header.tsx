import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <div className="branding">
                <h1>Soaif Habib</h1>
                <p>Web Developer | Software Engineer</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
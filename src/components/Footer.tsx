import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
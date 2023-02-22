import React from 'react';

const Footer: React.FC = () => (
    <footer>
        <p>&copy; {new Date().getFullYear()} My Company</p>
        <a href="https://github.com/my-username/my-repo">View on GitHub</a>
    </footer>
);

export default Footer;

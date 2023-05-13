import React from 'react';

interface Link {
    label: string;
    url: string;
}

const links: Link[] = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    // Add more links as needed
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex justify-center">
                <nav>
                    <ul className="flex space-x-6">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItem {
    name: string;
    route: string;
}

const Navbar: React.FC = () => {
    const menuItems: MenuItem[] = [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Contact', route: '/contact' },
    ];

    const [activeItem, setActiveItem] = useState<MenuItem>(menuItems[0]);

    const handleClick = (item: MenuItem) => {
        setActiveItem(item);
    };

    return (
        <nav className="flex justify-center gap-40 bg-slate-200 w-screen uppercase text-2xl text-slate-700 font-semibold py-5">
            <ul className='flex items-center gap-32'>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={item === activeItem ? 'active' : ''}
                        onClick={() => handleClick(item)}
                    >
                        <NavLink to={item.route}>{item.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import { PATHS } from '../pages/path';

export default function Navbar() {
    const [isMobileNavVisible, setMobileNavVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

    const toggleMobileNav = () => {
        setMobileNavVisible(!isMobileNavVisible);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 770);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems = [
        { label: 'Home', to: PATHS.HOME },
        { label: 'Mortals', to: PATHS.MORTAL.BASE },
        { label: 'Vampire', to: PATHS.VAMPIRE.BASE },
        { label: 'Werewolf', to: PATHS.WEREWOLF.BASE },
        { label: 'Mage', to: PATHS.MAGE.BASE },
        { label: 'Promethean', to: PATHS.PROMETHEAN.BASE },
        { label: 'Changeling', to: PATHS.CHANGELING.BASE },
        { label: 'Hunter', to: PATHS.HUNTER.BASE },
        { label: 'Geist', to: PATHS.GEIST.BASE },
        { label: 'Mummy', to: PATHS.MUMMY.BASE },
    ];

    return (
        <>
            {isMobile && (
                <span className="mobile-nav-toggle" onClick={toggleMobileNav}>
                    &#9776;
                </span>
            )}

            {isMobile ? (
                <div className={`sidenav ${isMobileNavVisible ? 'show' : ''}`}>
                    <a href="javascript:void(0)" className="closebtn" onClick={toggleMobileNav}>
                        &times;
                    </a>
                    {navItems.map(({ label, to }) => (
                        <NavLink key={to} exact to={to} onClick={toggleMobileNav}>
                            {label}
                        </NavLink>
                    ))}
                </div>
            ) : (
                <div className="navbar">
                    {navItems.map(({ label, to }) => (
                        <NavLink key={to} exact to={to}>
                            {label}
                        </NavLink>
                    ))}
                </div>
            )}
        </>
    );
}

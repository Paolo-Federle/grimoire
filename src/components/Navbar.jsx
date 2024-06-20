import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
    const [isMobileNavVisible, setMobileNavVisible] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavVisible(!isMobileNavVisible);
    };

    return (
        <>
            <button className="mobile-nav-toggle" onClick={toggleMobileNav}>
                {isMobileNavVisible ? '✖' : '☰'}
            </button>
            {isMobileNavVisible ? (
                <div className="mobile-nav">
                    <NavLink exact to="/" onClick={toggleMobileNav}>Home</NavLink>
                    <NavLink exact to="/mortal" onClick={toggleMobileNav}>Mortals</NavLink>
                    <NavLink exact to="/vampire" onClick={toggleMobileNav}>Vampire</NavLink>
                    <NavLink exact to="/werewolf" onClick={toggleMobileNav}>Werewolf</NavLink>
                    <NavLink exact to="/mage" onClick={toggleMobileNav}>Mage</NavLink>
                    <NavLink exact to="/promethean" onClick={toggleMobileNav}>Promethean</NavLink>
                    <NavLink exact to="/changeling" onClick={toggleMobileNav}>Changeling</NavLink>
                    <NavLink exact to="/hunter" onClick={toggleMobileNav}>Hunter</NavLink>
                    <NavLink exact to="/geist" onClick={toggleMobileNav}>Geist</NavLink>
                    <NavLink exact to="/mummy" onClick={toggleMobileNav}>Mummy</NavLink>
                </div>
            ) : (
                <div className="navbar">
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink exact to="/mortal" >Mortals</NavLink>
                    <NavLink exact to="/vampire">Vampire</NavLink>
                    <NavLink exact to="/werewolf">Werewolf</NavLink>
                    <NavLink exact to="/mage">Mage</NavLink>
                    <NavLink exact to="/promethean" >Promethean</NavLink>
                    <NavLink exact to="/changeling" >Changeling</NavLink>
                    <NavLink exact to="/hunter" >Hunter</NavLink>
                    <NavLink exact to="/geist" >Geist</NavLink>
                    <NavLink exact to="/mummy" >Mummy</NavLink>
                </div>
            )}
        </>
    );
}

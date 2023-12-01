import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar center-horizontally">
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
    );
};
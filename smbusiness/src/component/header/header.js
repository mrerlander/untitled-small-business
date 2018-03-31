import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const Header = () => (
    <Navbar className='light-blue' brand='logo' right>
        <NavItem href='#'>About</NavItem>
        <NavItem href='#'>Demo</NavItem>
        <NavItem href='#'>Contact</NavItem>
    </Navbar>
);

export default Header;
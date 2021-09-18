import React from 'react';
import {Link} from 'react-router-dom';
import {Links, Logo, Nav, NavCont} from './Navbarstyle';

function Navbar() {
    return (
        <NavCont>
            <Logo>
                <img src='' alt='crascar logo'/>
            </Logo>
            <Nav>
            <Links to='/'>
                HOME
            </Links>
            <Links to='/carview'>
               CRASH VIEW
            </Links>
            <Links to='/about'>
               ABOUT
            </Links>
            <Links to='/contact'>
               CONTACTS
            </Links>
            <Links>
               Sign Up
            </Links>
            <Links>
               Register
            </Links>
            </Nav>
        </NavCont>
    )
}

export {Navbar}

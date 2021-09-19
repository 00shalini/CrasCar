import React from 'react';
import {Img, Links, Logo, Nav, NavCont} from './Navbarstyle';
import crascar from './crascar.png';

function Navbar() {
    return (
        <NavCont>
            <Logo>
                <Img src={crascar} alt='crascar logo' />
            </Logo>
            <Nav>
            <Links to='/'>
                HOME
            </Links>
            <Links to='/carview'>
               CRASH DETAIL
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

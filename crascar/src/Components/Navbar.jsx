import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to='/'>
                HOME
            </Link>
            <Link to='/crashview'>
               CRASH VIEW
            </Link>
            <Link to='/about'>
               ABOUT
            </Link>
            <Link to='/contact'>
               CONTACTS
            </Link>
        </div>
    )
}

export {Navbar}

import React from 'react';
import {Link } from 'react-router-dom';
import './Layout.scss';
import logo from '../images/logo.svg';
function Layout(){
    return(

        <div className='header'>
            <nav className='navbar'>
                <img  className = 'logo'/>
                
                <ul >
                    <li className ='nav-item'>
                        <Link to ='/'>Games</Link>
                    </li>
                    <li className ='nav-item'>
                        <Link to ='/signup'>Sign up</Link>
                    </li>
                    <li className ='nav-item'>
                        <Link to ='/login'>Login</Link>
                    </li>
                </ul>

            </nav>
           
        </div>
    )

}

export default Layout;
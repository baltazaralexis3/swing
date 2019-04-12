import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {

    return(
        <div className='NavBar'>
            <span>
            <Link to='/' className='swing-logo'>swing</Link></span>
            <span className='NavLinksGrp'>
            <Link to='/login' className='NavBar-link'>log in&nbsp;&nbsp;|&nbsp;&nbsp;</Link>
            <Link to='/signup' className='NavBar-link'>sign up&nbsp;&nbsp;|&nbsp;&nbsp;</Link>
            <Link to='/' className='NavBar-link'>home&nbsp;&nbsp;</Link>
            </span>
        </div>
    )

}

export default NavBar;


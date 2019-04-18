import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {

    return(
        <nav>
             <div className='nav-wrapper yellow darken-1'>
            <span>
            <Link to='/' className='swing-logo left'>swing</Link></span>
            <span className='right'>
            <Link to='/login' className='NavBar-link'>log in&nbsp;&nbsp;|&nbsp;&nbsp;</Link>
            <Link to='/signup' className='NavBar-link'>sign up&nbsp;&nbsp;|&nbsp;&nbsp;</Link>
            <Link to='/moods' className='NavBar-link'>moods&nbsp;&nbsp;</Link>
            </span>
        </div>
        </nav>
       
    )

}

export default NavBar;


import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from './Button'
import '../assets/styles/Navbar.css'

function Navbar() {
    const [click, setclick] = useState(false)
    const [button, setbutton] = useState(false)

    const handleClick = () => setclick(!click)

    const closeMobileMenu = () => setclick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setbutton(false)
        } else {
            setbutton(true)
        }
    }

    useEffect(() => {
      showButton(true)

    }, [])
    
    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container' onClick={closeMobileMenu}>
                    <Link to={"/"} className='navbar-logo'>
                        TYBW <i className='fab fa-typo3'></i>
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMobileMenu} className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' onClick={closeMobileMenu} className='nav-links'>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' onClick={closeMobileMenu} className='nav-links'>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button
                    buttonStyle='btn--outline'

                >SIGN UP</Button>}
            </nav>
        </>
    )
}

export default Navbar
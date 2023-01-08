import React from 'react'
import { Button } from './Button'
import '../assets/styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join us and subscribe to our emails for daily updates
                </p>
                <p className="footer-subscription-text">
                    Subscribe Us!
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email"
                            name="email"
                            placeholder="Email Address"
                            className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Testimonial</Link>
                        <Link to='/'>Products</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Packages</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Careers</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Testimonial</Link>
                        <Link to='/'>Products</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Packages</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Services</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Testimonial</Link>
                        <Link to='/'>Products</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Packages</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Packages</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Testimonial</Link>
                        <Link to='/'>Products</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Packages</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            TYBW <i className='fab fa-type3'></i>
                        </Link>
                    </div>
                    <small className="website-rights">TYBW copyrights 2023</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link className="social-icon-link Instagram"
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className="social-icon-link Twitter"
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link LinkedIn"
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
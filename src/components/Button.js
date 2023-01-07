import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/Button.css';

const SIZE = ['btn--medium', 'btn--large'];
const STYLES = ['btn--primary', 'btn--outline'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZE[0]
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </Link>
    )
}

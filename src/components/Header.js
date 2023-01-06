import React from 'react'
import '../assets/styles/header.css'
import AccordionList from './AccordionList'

function Header() {
    var Landings = ["Startup", "Saas v.1", "Saas v.2", "Documenttion", "Main page", "Conference", "Digital Agency"]
    var Pages = ["Startup", "Saas v.1", "Saas v.2", "Documenttion", "Main page", "Conference", "Digital Agency", "Grid alyout", "Grid with no Layout", "Word wrap property"]

    return (
        <div className='header_wrapper'>
            <div className='left_header'>
                <div>
                    <span>Silicon</span>
                    <div></div>
                </div>
                <div>
                    <span>Landing</span>
                    <AccordionList feature={Landings} />
                    <div>{'>'}</div>
                </div>
                <div>
                    <span>Pages</span>
                    {/* <AccordionList feature={Pages} /> */}
                    <div>{'>'}</div>
                </div>
                <div>Portfolio</div>
            </div>
            <div className='right_header'>
                <div>Light</div>
                <div>Buy Now</div>
            </div>

        </div>
    )
}

export default Header
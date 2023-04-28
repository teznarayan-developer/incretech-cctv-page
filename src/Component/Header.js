import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiPhoneLine } from "react-icons/ri"
import { MdOutlineMailOutline } from "react-icons/md"

function Header() {
    return (
        <>
            <div>
                <nav>
                    <div className='navbar'>
                        <div className='topline'>
                            <h3><span style={{ color: '#ffb614' }}>Limited Time Offer:</span> Shop online and get free no-contact delivery</h3>
                        </div>
                        <div className='navlink'>
                            <NavLink className='link' to='/'>FAQ</NavLink>
                            <NavLink className='link' to='/c'>Careers</NavLink>
                            <NavLink className='link hr' to='/e'>English <RiArrowDropDownLine className='drop-icon' /></NavLink>

                        </div>
                    </div>
                </nav>
            </div>
            <div className='header2'>
                <div style={{ display: "flex", margin: "auto -1rem auto 8rem" }}>
                    <div className='header-img' >
                        <img src="./Images/CCTV-img.png" alt="" />
                    </div>
                    <div className='contact' >
                        <div>
                            <RiPhoneLine className='telephone' />
                        </div>
                        <h3> Make a call</h3>
                        <a href="tel: 8080309633">+91 808 030 9633</a>
                    </div>
                    <div className='email' style={{ margin: "auto 5rem" }}>
                        <div><MdOutlineMailOutline className='email-icon' /></div>
                        <h3>Email address</h3>
                        <a href="tel: 8080309633">incretech@gmail.com</a>
                    </div>
                    <div className='appointment'>
                        <a href="">Make Appointment</a>
                    </div>
                </div>
                <div className='header-link' >
                    <NavLink className="header-navlink" to="/m">Home</NavLink>
                    <NavLink className="header-navlink , border" to="/l">Home</NavLink>
                    <NavLink className="header-navlink , border" to="/i">Home</NavLink>
                    <NavLink className="header-navlink , border" to="/i">Home</NavLink>
                    <NavLink className="header-navlink , border" to="/i">Home</NavLink>
                    <NavLink className="header-navlink , border" to="/i">Home</NavLink>
                    <div>
                        <a href="">Search</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
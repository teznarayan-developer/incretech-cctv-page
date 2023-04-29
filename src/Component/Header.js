import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiPhoneLine } from "react-icons/ri"
import { MdOutlineMailOutline } from "react-icons/md"
import { CiSearch } from "react-icons/ci"

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
                <div style={{ display: "flex", margin: "auto 2rem auto 9rem" }}>
                    <div className='header-img' >
                        <img style={{marginLeft:"-1rem"}} src="./Images/CCTV-img.png" alt="" />
                    </div>
                    <div className='contact' style={{margin: "auto -3.8rem"}} >
                        <div>
                            <RiPhoneLine className='telephone' />
                        </div>
                        <h3> Make a call</h3>
                        <a href="tel: 8080309633">+91 808 030 9633</a>
                    </div>
                    <div className='email' style={{ margin: "auto 2rem auto 11.9rem" }}>
                        <div><MdOutlineMailOutline className='email-icon' /></div>
                        <h3>Email address</h3>
                        <a href="tel: 8080309633">incretech@gmail.com</a>
                    </div>
                    <div className='appointment'>
                        <a href="">Make Appointment</a>
                    </div>
                </div>
                <div className='header-link' >
                    <ul className='header-navlink'>
                        <li className='border'><a href="#">Home</a></li>
                        <li className='border'><a href="#">Home</a></li>
                        <li className='border'><a href="#">Home</a></li>
                        <li className='border'><a href="#">Home</a></li>
                        <li className='border'><a href="#">Home</a></li>
                        <li className='border'><a href="#">Home</a></li>
                        <div className='search-bar'>
                            <CiSearch className='search-icon' />
                            <a href="">Search here</a>
                        </div>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Header;
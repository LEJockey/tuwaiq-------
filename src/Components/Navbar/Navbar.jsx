import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assests/logo-navbar.png'
import {FiFacebook} from 'react-icons/fi'
import {FaXTwitter} from 'react-icons/fa6'
import {IoCallOutline} from 'react-icons/io5'
import {AiOutlineProfile, AiOutlineMail, AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai'
import arImg from '../../assests/Ar.png'

const Navbar = () => {
  return (
    <>
    
    
    <nav className="navbar navbar-expand-md  navbar-dark fixed-top py-0 custom-padding">


    {/* Contact Navbar */}
    
    <div className='nav-bar main-bg py-1'>
        
        <div className="container d-flex justify-content-between align-items-center">
        
        {/* Contact Icons */}
        <div className="contact-part">
            {/* Proflie */}
            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href='home'
                download= '' 
            >
                <span className='second-color d-inline-block me-0 me-md-1'><AiOutlineProfile/></span>
                Profile
            </a>

            {/* Phone */}
            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href='tel:0544440399'
            >
                <span className='second-color d-inline-block me-0 me-md-1'><IoCallOutline/></span>
                0544440399
            </a>

            {/* Mail */}
            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href='home'
            >
                <span className='second-color d-inline-block me-0 me-md-1'><AiOutlineMail/></span>
                twieaq@gmail.com
            </a>
        </div>

        {/* Social Icons */}
        <div className='social-part'>
            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href='home'
                download= '' 
            >
                <span className='second-color d-inline-block me-0 me-md-1'><FaXTwitter/></span>
            </a>

            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href='home'
                download= '' 
            >
                <span className='second-color d-inline-block me-0 me-md-1'><FiFacebook/></span>
            </a>

            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href='home'
                download= '' 
            >
                <span className='second-color d-inline-block me-0 me-md-1'><AiOutlineYoutube/></span>
            </a>

            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href='home'
                download= '' 
            >
                <span className='second-color d-inline-block me-0 me-md-1'><AiOutlineInstagram/></span>
            </a>

            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3 lang' 
                href='home'
                download= '' 
            >
                <img width={30} src= {arImg} alt="AR" />
            </a>

        </div>
        </div>    
    </div>


    {/* Routing Navbar */}

    <div className="nav-container container-fluid container-lg py-2">

        <Link className="navbar-brand " to=" ">

            <img src={logo} height='80' width='100' alt="Kayan Frozen Foods" title='logo' />

        </Link>


        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            
            <span className="navbar-toggler-icon"></span>
    
        </button>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            
            <div className="offcanvas-header justify-content-center">

                <button type="button" className="btn-close" data-bs-dimdiss="offcanvas" aria-label="Close"></button>

            </div>

        <div className="offcanvas-body">

            <ul className="navbar-nav justify-content-end flex-grow-1">
                
                <li className="nav-item">

                    <NavLink  className="nav-link " aria-current="page" to=" ">HOME</NavLink>

                </li>

                <li className="nav-item">

                    <NavLink className="nav-link" to="about">ABOUT US</NavLink>

                </li>

                <li className="nav-item">

                    <NavLink className="nav-link" to="products">OUR SERVICES</NavLink>

                </li>

                <li className="nav-item">

                    <NavLink className="nav-link" to="projects">OUR Projects</NavLink>

                </li>

                <li className="nav-item dropdown">
                <span
                    className="nav-link dropdown-toggle "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Media Center
                </span>
                    
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="photos">Photos</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="videos">Videos</Link></li>
                    </ul>
                </li>


                <li className="nav-item">

                    <NavLink className="nav-link" to="blog">BLOG</NavLink>

                </li>

                <li className="nav-item">

                    <NavLink className="nav-link" to="contactus">CONTACT US</NavLink>

                </li>

            </ul>
        
        </div>
        </div>

    </div>
</nav>
    </>

  )
}

export default Navbar
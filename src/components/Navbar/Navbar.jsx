import React, { useState } from 'react'
import logo from "../../assets/websitelogo.png"
import { GiHamburgerMenu, GiTireIronCross } from 'react-icons/gi'
import { FiUser } from 'react-icons/fi'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isClicked,setIsClicked]=useState(false);
    const [selectedLink,setSelectedLink]=useState(window.location.pathname);
    function handleHam(){
        setIsClicked(!isClicked)
    }
    function handleSelectedLink(select){
        setSelectedLink(select)
    }
    
  return (
    <nav className='navbar'>
        <div className='logoDiv'>
            <img className='logoImg' src={logo} alt="logo" />
        </div>
        <div className="hamburgerMenu">
            {!isClicked ? <GiHamburgerMenu size={25} onClick={handleHam} /> : <GiTireIronCross size={25} onClick={handleHam} />}
        </div>
        <div className={`links ${isClicked && 'show1' }`}>
            <Link to='/' className={`link ${selectedLink==="/" && 'linkSelected'}`} onClick={e=>handleSelectedLink("/")}>HOME</Link>
            <Link to='/journey' className={`link ${selectedLink==='/journey' && 'linkSelected'}`} onClick={e=>handleSelectedLink("/journey")}>THE JOURNEY</Link>
            <Link to='/team' className={`link ${selectedLink==='/team' && 'linkSelected'}`} onClick={e=>handleSelectedLink("/team")}>TEAM</Link>
            <Link to='/' className={`link ${selectedLink==='/' && 'linkSelected'}`} onClick={e=>handleSelectedLink("/")}>STORE</Link>
            <Link to='/contact' className={`link ${selectedLink==='/contact' && 'linkSelected'}`} onClick={e=>handleSelectedLink("/contact")}>CONTACT</Link>
        </div>
        <div className={`user ${isClicked && "show2"}`}>
            <FiUser className='userImg' size={25} />
            <h4 className='userName'>GAGAN</h4>
        </div>
    </nav>
  )
}

export default Navbar
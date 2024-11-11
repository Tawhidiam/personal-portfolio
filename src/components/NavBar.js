import React, { useEffect, useState } from 'react'
import {Navbar, Container,Nav} from 'react-bootstrap'
import portf from '../images/tauhid.png';
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/nav-icon2.svg";
import navIcon3 from "../images/nav-icon3.svg";
import navIcon4 from "../images/gitIcon.jpg"

const NavBar = () => {
    const [activeLink, setActiveLink]= useState('home');
    const [scrolled, setScrolled]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return()=>window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home"><img src={portf} alt='logo' width="50px" height='50px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink=='home'?'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink=='skills'?'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink=='projects'?'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon' >
                <a href="https://github.com/Tawhidiam" target='blank'><img src={navIcon4} alt="Git Hub"/></a>
                <a href="https://www.linkedin.com/in/tawhidiam/" target='blank'><img src={navIcon1} alt="LinkedIN"/></a>
                <a href="https://www.facebook.com/TAWHIDiam" target='blank'><img src={navIcon2} alt="Facebook"/></a>
                <a href="#" target='blank'><img src={navIcon3} alt="Instagram"/></a>
            </div>
            <Nav.Link href="#connect">
            <button className={activeLink=='contact'?'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('contact')}><span>Let's Connect</span></button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
import React from "react";
import "./MainPage.css";
import {Outlet, Link}from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MainPage(){
    // return (
    //     <div>
    //       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //         <div className="container-fluid">
    //           <Link className="navbar-brand" to = '/'> Organized Chaos</Link>
    //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //             <ul className="navbar-nav">
    //               <li className="nav-item">
    //               <Link className="nav-link" to = '/home'>Home</Link>
    //               </li>
    //               <li className="nav-item">
    //               <Link className="nav-link" to = "/about">About</Link>
    //               </li>
    //               <li className="nav-item">
    //               <Link className="nav-link" to = "/jobs">Jobs</Link>
    //               </li>
    //               <li className="nav-item">
    //               <Link className="nav-link" to = "/contact">Contact</Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </nav>
    //     </div>
    // )

    return(
      <>
        <Navbar >
          <Container>
            <Navbar.Brand className="navHeading" href="#home"><Link to = '/'> Organized Chaos: A language of Art</Link></Navbar.Brand>
            <Nav className="me-auto">
            {/* <Nav.Link className="nav-item" href="/">Login</Nav.Link> */}
              <Nav.Link className="nav-item"  style={{color: "aquamarine"}}  href="/home">Home</Nav.Link>
              <Nav.Link className="nav-item" style={{color: "aquamarine"}} href="/about">About</Nav.Link>
              <Nav.Link className="nav-item" style={{color: "aquamarine"}} href="/jobs">Jobs</Nav.Link>
              <Nav.Link className="nav-item" style={{color: "aquamarine"}} href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    <Outlet />
    </>

  )

}
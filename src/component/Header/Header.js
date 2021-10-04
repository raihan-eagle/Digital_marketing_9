import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        
        <div>
            <div className='top-bar d-flex justify-content-end py-1 px-3'>
                <h6>Contact: +88-016-70000000</h6>
            </div>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-info rounded">
                    <div className="container-fluid">
                    <NavLink className="navbar-brand p-2 bg-warning rounded text-dark" to="/home">Etech-Solution</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                            <NavLink className="nav-link" to="/aboutus">AboutUs</NavLink>
                            <NavLink className="nav-link" to="/testimonials">Testimonials</NavLink>
                            
                        </div>
                    </div>
                    </div>
                </nav>
                <div className='mx-auto d-flex justify-content-center align-items-center mt-md-3'>
                    <img className='logo-image App-logo'  src={logo} alt="" />
                    <h2> Etech-Solution</h2>
                </div>
                <br />

            </div>
        </div>
    );
};

export default Header;
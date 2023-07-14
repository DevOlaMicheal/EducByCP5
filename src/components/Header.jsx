import React from 'react';
import enGbFlag from '../assets/images/language/en-gb/en-gb.png';
import { auth } from '../firebase';
import { Link, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';



const Header = ({ authUser, userSignOut }) => {

    
  return (
    <header>
        {/* <div classNameName="container-fluid px-5 py-2 nav-box">
            <div classNameName="row welcome-top">
                <div classNameName="col-8 fs-6">The Access To Endless Educational Content</div>
            </div>
        </div> */}
        <div className="row my-4">
            <div className="col-2 py-2">
                <img src="https://th.bing.com/th/id/OIP.IPUDTmz_43gYqMmWUGo2xgHaC1?w=335&h=133&c=7&r=0&o=5&pid=1.7" alt="EduTech" className="logo" height={40}/>
            </div>
            <div className="col-10">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div
                        className="container-fluid">
                        {/* <!-- <a className="navbar-brand" href="#">Navbar</a> --> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               
                               </ul>
                            <div className="header-links text-end">

                                { !authUser && (
                                    <span>
                                    <i className="fa fa-lock"></i> <a href="/login">Login</a> | <a href="/register">Register</a>
                                </span>
                                )}
                                { authUser && (
                                    <span>
                                        <i className="fa fa-lock"></i> <Link to="/login" onClick={() => userSignOut}>Logout</Link>  | <p>{authUser.email}</p>
                                    </span>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
            
    </header>
  );
};

export default Header;

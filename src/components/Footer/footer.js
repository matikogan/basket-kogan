import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom' 

function Footer() {
    return (
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-5 border-top'>
            <p className='col-md-4 mb-0 text-muted'>Basketball Jerseys, Inc</p>
            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img className='logo-footer' src='../logo1.png'></img>
            </a>
            <ul className="nav col-md-4 justify-content-space-around">
                <li className="nav-item"><Link to='/'><a className="nav-link px-2 text-muted">Home</a></Link></li>
                <li className="nav-item"><Link to='/contact/'><a className="nav-link px-2 text-muted">Contact</a></Link></li>
                <li className="nav-item"><Link to='/all-star'><a className="nav-link px-2 text-muted">All-Star Jerseys</a></Link></li>
                <li className="nav-item"><Link to='/regular-season'><a className="nav-link px-2 text-muted">NBA Jerseys</a></Link></li>
            </ul>
        </footer>
    )
}


export default Footer;

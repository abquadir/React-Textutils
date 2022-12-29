import React from 'react'
import PropTypes from 'prop-types';
// import { a } from 'react-router-dom';

const Navbar = props => {
  return (
    <div>
      <nav className= {`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.Title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.Home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.About}</a>
        </li>
      </ul>
    </div>
    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
  
</nav>
    </div>
  )
}
// Props Type example
Navbar.propTypes = {
    Title: PropTypes.string.isRequired,
    Home: PropTypes.string,
    About: PropTypes.string,
}
// Default Props Example
Navbar.defaultProps ={
    Title: "Set Title Here",
    Home: "Home",
    About: "About",
}


export default Navbar



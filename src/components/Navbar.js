import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid ">
          <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} style = {{fontSize: '30px'}} to ="/"><strong>{props.title}</strong></Link>
          <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link  text-${props.mode === 'light' ? 'dark' : 'light'}`} style = {{fontSize: '20px'}} to ="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  text-${props.mode === 'light' ? 'dark' : 'light'}`} style = {{fontSize: '20px'}} to ="/blog">{props.list1}</Link>
              </li>
              <li className="nav-item">
                {/* <Link className={`nav-link  text-${props.mode === 'light' ? 'dark' : 'light'}`} to ="/">About</Link> */}
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input " style = {{marginTop: '8px'}} type="checkbox" onChange={props.toggleMode} aria-checked = "true" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} mx-3 fs-5`} htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  list1: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  list1: "{Blog}"
};

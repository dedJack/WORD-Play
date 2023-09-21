import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid ">
          <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} style = {{fontSize: '30px'}} to ="/"><strong>{props.title}</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
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

            {/* <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div class="container-fluid">
  <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} style = {{fontSize: '30px'}} to ="/"><strong>{props.title}</strong></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
            
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

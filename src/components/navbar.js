import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render(){
		return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top header-color">
        <div class="container-fluid">
          <Link to="/" className="nav-link js-scroll-trigger" id="title">Portfolio</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/projects" class="nav-link js-scroll-trigger ">My Projects</Link>
              </li>
              <li class="nav-item">
                <Link to="/resume" class="nav-link js-scroll-trigger">Resumé</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link js-scroll-trigger">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
	}
}

export default Navbar;

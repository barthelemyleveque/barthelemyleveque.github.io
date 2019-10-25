import React, { Component } from 'react';

class Footer extends Component {
	render(){
		return(
      <footer id="sticky-footer" class="header-color">
        <div class=" h-100 d-flex justify-content-center align-items-center">
            <a href="https://www.linkedin.com/in/barth%C3%A9l%C3%A9my-leveque-73001ba3/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin" title="LinkedIn"> </a>
            <a href="https://github.com/barthelemyleveque" target="_blank" rel="noopener noreferrer" class="fa fa-github" title="GitHub"> </a>
            <a href="mailto: bleveque@student.42.fr" target="_blank" rel="noopener noreferrer" class="fa fa-envelope" title="Mail"> </a>
        </div>
    </footer>
    )
	}
}

export default Footer;

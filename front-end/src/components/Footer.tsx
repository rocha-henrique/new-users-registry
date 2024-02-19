import React from 'react';
import '../css/Footer.css'
import linkedin from '../images/linkedin.png';
import github from '../images/github.png'
import 'bootstrap/dist/css/bootstrap.css';

const footer: React.FC = () => {
  return (
    <div className='footer'>
      	<a
				href="https://www.linkedin.com/in/henrique-rocha-de-sousa/"
				target="_Blank"
				rel="noreferrer"
				className="linkedin"
			>
				<img className="linkedin" src={linkedin} alt="linkedin" />
			</a>
      	<a
				href="https://github.com/rocha-henrique"
				target="_Blank"
				rel="noreferrer"				
				className="github"
			>
        <img className="github" src={github} alt="github" />
      </a>
    </div>
  );
}

export default footer;
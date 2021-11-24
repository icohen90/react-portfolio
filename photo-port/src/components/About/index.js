import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import aboutimg from '../../assets/about.png';
import resume from '../About/Resume.pdf';

function About() {
  return (
    <section className="about" id="about">

      <div className="container">
      <Fade left>
        <div className="left">
            <img src={aboutimg} alt="guy coding" />
        </div>
      </Fade>

        <Fade right>
          <div className="right">
              <h2 class="section-title"> About <span className="span-color">Me.</span></h2>
              <p className="first-p">My name is Ian Cohen. I am a full stack web developer and a University of Central Florida coding bootcamp graduate. </p>
              <a className="resume-btn" href={resume} download rel="noopener noreferrer" target="_blank">Resume (PDF)</a>
          </div>
        </Fade>
      </div>
      
      <Fade bottom>
      <h2 class="section-title myskills"> My <span className="span-color">Skills.</span></h2>
      </Fade>

    </section>
    
  );
}

export default About;
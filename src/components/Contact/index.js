import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';


function Contact() {

  return (
    <section className="contact" id="contact">
      <Fade bottom cascasde>
      <div className="contact-left">
          <Pulse>
          <h2>Get in touch with <span className="span-color">me through Social media</span></h2>
          </Pulse>
          <div>
              <a href="https://www.linkedin.com/in/ian-cohen-6b1a091b9/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in fa-7x"></i></a>
          <a href="https://github.com/icohen90" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-7x"></i></a>
          </div>
      </div>
      </Fade>

      <Fade right>
        <div className="contact-right">
          <div className="contact-box">
            <h1>Contact Me directly</h1>
            <p>Phone #: (561)699-0594</p>
            <p>Email: <a href="mailto:ian_cohen90@live.com">Ian Cohen</a></p>
          </div>
        </div>
      </Fade>

    </section>
    
  );
}

export default Contact;
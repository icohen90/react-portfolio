import React from 'react';
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <Fade bottom cascade>
    <section className="my-work" id="my-work">
      <h2 class="section-title"> My Recent <span className="span-color">Works.</span></h2>
      <div className="project-container">
        <div className="card">
          <div className="img-container img1"></div>
          <h3>Newna Bros.</h3>
          <p>A fully responsive landing page and online ski shop. This website is fully functional and includes a responsive shopping cart with login, signup, and authentication features. Utilizes Stripe.js for checkout. Built with the MERN stack. </p>
          <div className="btn-wrap">
            <button onClick={() => {
              window.open("https://newna-bros-ski-shop.herokuapp.com/", "_blank");
              }}>Visit the site<i class="fas fa-link"></i></button>
            <button onClick={() => {
              window.open("https://github.com/Electrolion/Newna-Slopes", "_blank");
              }}>See the code<i class="fas fa-code-branch"></i></button>
          </div>
        </div>
        
        <div className="card">
          <div className="img-container img2"></div>
          <h3>Reading Corner</h3>
          <p>A book club/journal application. Signup, login, and make posts to let your friends know what you think, as you read your favorite book! Built with Bootstrap, MySQL, Sequelize, and Express </p>
          <div className="btn-wrap">
            <button onClick={() => {
              window.open("https://reading-corner-project.herokuapp.com", "_blank");
              }}>Visit the site<i class="fas fa-link"></i></button>
            <button onClick={() => {
              window.open("https://github.com/Electrolion/Reading-corner", "_blank");
              }}>See the code<i class="fas fa-code-branch"></i></button>
          </div>
        </div>

        <div className="card">
          <div className="img-container img3"></div>
          <h3>Bets Board</h3>
          <p>My first project i did in my coding bootcamp. It is a simple app that gives you the top 10 stocks on reddit. You can then search about any of these stocks, in order to 
            get more information about the stock. </p>
          <div className="btn-wrap">
          <button onClick={() => {
              window.open("https://gracekevin.github.io/Betsboard/", "_blank");
              }}>Visit the site<i class="fas fa-link"></i></button>
          <button onClick={() => {
              window.open("https://github.com/GraceKevin/Betsboard", "_blank");
              }}>See the code<i class="fas fa-code-branch"></i></button>
          </div>
        </div>

        <div className="card">
        <div className="img-container img4"></div>
          <h3>My Portfolio</h3>
          <p>This is my own Portfolio project, which is still a work in progress. Would like to continue to improve it and add newer projects as well. </p>
          <div className="btn-wrap">
          <button onClick={() => {
              window.scrollTo(0, 0);
              }}>Scroll to top<i class="fas fa-angle-double-up"></i></button>
          <button onClick={() => {
              window.open("https://github.com/icohen90/react-portfolio", "_blank");
              }}>See the code<i class="fas fa-code-branch"></i></button>
          </div>
        </div>

      </div>
    </section>
    </Fade>
  );
}

export default Projects;
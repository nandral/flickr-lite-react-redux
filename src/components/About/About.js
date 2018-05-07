import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container">
      <div className="aboutHeader">About flickr lite</div>
      <div className="aboutContent">
        <div className="">
          This website is built using the front end technlogies like React, Redux accessing
          the&nbsp;
          <a href="https://www.flickr.com/services/feeds/docs/photos_public/" target="_blank">
            Flickr's JSONP API
          </a>
        </div>

        <div className="">
          Various technologies used to build the front end along with the reasons to choose each are
          listed below
        </div>
        <div className="">
          <ul>
            <li>
              <span className="tech-stack">React, JavaScript, ES6/7, HTML5&nbsp;</span> for building
              the front end components
            </li>
            <li>
              <span className="tech-stack">Redux&nbsp;</span> for managing application state, along
              with <span className="tech-stack">redux-saga&nbsp;</span> for side effects along with
              backend integration.
            </li>
            <li>
              <span className="tech-stack">CSS3&nbsp;</span> for styling the responsive front end.
            </li>

            <li>
              <span className="tech-stack">JQuery&nbsp;</span> for calling the Flickr's JSONP API.
            </li>
          </ul>
        </div>

        <div className="source-code">
          Source code is available on &nbsp;
          <a target="_blank" href="https://github.com/nandral/flickr-lite-react-redux">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

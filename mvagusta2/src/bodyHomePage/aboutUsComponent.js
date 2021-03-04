import React from "react";
import { Spring } from "react-spring/renderprops";
function AboutUsContent() {
  return (
    <Spring
      // from={{ opacity: 0, marginRight: 200, transition: "0.2s ease" }}
      // to={{ opacity: 1, marginRight: 0, transition: "0.2s ease" }}
      from={{ opacity: 0, transition: "1s ease" }}
      to={{ opacity: 1, transition: "0s ease" }}
    >
      {(props) => (
        <div className="about-us-content" style={props}>
          <p>We look to the future, and build machines</p>
          <br />
          <p>that are always one step ahead</p>
        </div>
      )}
    </Spring>
  );
}
export function AboutUs() {
  return (
    <Spring
      // from={{ opacity: 0, marginLeft: 200, transition: "0.2s ease" }}
      // to={{ opacity: 1, marginLeft: 0, transition: "0.2s ease" }}
      from={{ opacity: 0, transition: "1s ease" }}
      to={{ opacity: 1, transition: "0s ease" }}
    >
      {(props) => (
        <>
          <div className="about-us-slogan" style={props}>
            <div className="about-us-video">
              {/* <video width="100%" height="100%" >
                <source src="Background.mp4" type="video/mp4"></source>
              </video> */}
              {/* <iframe
                src="https://www.youtube.com/embed/sIgz03cfQ4U?autoplay=1&mute=1&loop=1&controls=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay, fullscreen"
                allowFullScreen
                title="aaaa"
              ></iframe> */}

              <div className="video-control-layout">
                <a
                  href="https://www.youtube.com/watch?v=sIgz03cfQ4U"
                  className="video-control"
                  target = "_blank"
                ></a>
              </div>
            </div>
            <p>WE DO NOT</p>
            <span> SIMPLY</span>
            <br />
            <span> BUILD </span>
            <p>MOTORCYCLES, </p>
            <br />
            <p>WE </p>
            <span>CRAFT </span>
            <p>EMOTIONS.</p>
          </div>
          <AboutUsContent />
          <div className="about-us-button-container">
            <button>
              <a href="about-us">ABOUT US</a>
            </button>
          </div>
        </>
      )}
    </Spring>
  );
}

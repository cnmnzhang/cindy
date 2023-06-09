import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  // scrollToTarget(event) {
  //   event.preventDefault();
  //   const targetElement = document.getElementById('about');

  //   if (targetElement) {
  //     window.scrollTo({
  //       behavior: 'smooth',
  //       top: targetElement.offsetTop,
  //     });
  //   }
  // }



  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={80}>
          <span className="intro-title">
            {"hello, from me. "}
            <span className="intro-name">{"cindy zhang"}</span>
            {"."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I am making my own website.</div>
          <div className="intro-desc">
            I'm a software engineer and programmer analyst based in Washington DC. I have great
            interest in data science, machine learning, software engineering,
            and everything else.
          </div>
          <a
            href="mailto:czhan117@jhu.edu"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"Say hi!"}
          </a>
          <a href="#about">
            <div className="down-arrow"></div>
          </a>
          {/* <section id="section05" class="demo">
  <a href="#section06"><span></span>Scroll</a>
</section> */}
        </FadeInSection>

      </div>
    );
  }
}

export default Intro;
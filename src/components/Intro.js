import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
// import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
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
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"cindy zhang"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            I'm a software engineer and artist based in Washington DC. I have great
            interest in data science, machine learning, software engineering,
            and everything else.
          </div>
          <a
            href="mailto:gazi.jarin@mail.utoronto.ca"
            className="intro-contact"
          >
            {/* <EmailRoundedIcon></EmailRoundedIcon> */}
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
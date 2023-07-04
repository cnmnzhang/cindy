import React from "react";
import "../styles/Footer.css";
import FadeInSection from "./FadeInSection";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
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
      <FadeInSection>
        <div id="footer">
          <div className="ending-footer">
            <div>Built and designed by Cindy Zhang. </div>
            <div>Credits to <a href="https://brittanychiang.com/" target="_blank">Brittang Chiang</a></div>
          </div>
        </div>
      </FadeInSection>
    );
  }
}

export default Footer;
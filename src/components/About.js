import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const activities = [
      "biology, AI/ML, precision medicine, longevity",
      "being outdoors, movement, physical training, deep breaths",
      "Chinese culture, practicing Mandarin, and learning about other cultures",
      "creating art and writing, as well as participating in active discussions",
      "books, blogs, and podcasts (Huberman Lab, Peter Attia, 聊聊东西.)",
    ];

    const one = (
      <div>
        <p>
          I am a complete student of this world with a passions is understanding how the world
          works. Furthermore, I am inspired by the human ability, and I have a
          resolve to uncover all that I am capable of, and to push those
          boundaries through creation! My enjoyments consist of:
        </p>

        <ul className="activities">
          {activities.map(function (activities_item, i) {
            return (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li>{activities_item}</li>
              </FadeInSection>
            );
          })}
        </ul>
      </div>
    );
    const two = (
      <div>
        <p>Located in Washington, DC. From Minnesota!</p>
      </div>
    );

    // const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {[two]}
            </div>
            <div className="about-image">
              <img src={"./assets/cindy.JPG"} alt="cindy" />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

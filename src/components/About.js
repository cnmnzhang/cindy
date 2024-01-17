import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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

    const activities = [
      "following scientific developments and working on technical projects",
      "spending time outdoors and enduring physical training",
      "practicing Mandarin and familiarizing myself with Chinese culture",
      "creating art and writing",
      "reading books and listening to podcasts",
    ];

    const one = (
      <div>
      <p>
        I am a student of this world and receive inspiration from our daily lives. One of my greatest passions is understanding how the world works.
        Furthermore, I am inspired by the human ability, and I have a resolve to uncover all that I am capable of, and to push those boundaries through creation!
        In pursuit of my passions of learning and creation, I spend my time:
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
      <p>
        The other 8 hours of the day, I am  a <b>Senior Programmer Analyst</b> at Johns Hopkins Hospital!
        I am a part of the Data Management team, and we support the Precision Medicine initiative to deliver clinical data to researchers. Visit the experience section to learn more about my work! 
        I develop my career by pursuing opportunities to solve interesting problems in healthcare and medicine using modern, state-of-the-art technology. I believe in improving the quality of life through precision medicine.
      </p>
      <p>
        Currently located in Washington, DC, and I grew up in Minnesota!
      </p>

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
              <img src={"/assets/cindy.JPG"} alt="cindy"/>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
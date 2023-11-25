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
    const one = (
      <p>
        I am  a <b>Senior Programmer Analyst</b> at Johns Hopkins, working on the Precision Medicine Data Management Team. 
        I work with electronic health records and clinical data for clinical research by maintaining ETL pipelines, developing custom code, and improve architecture. 
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science, technology, and art. 
      </p>
    );

    const tech_stack = [
      "Data Bricks",
      "Azure Data Factory",
      "SQL Server",
      "Apache Spark",
    ];

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
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/cindy.jpg"} alt="cindy"/>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
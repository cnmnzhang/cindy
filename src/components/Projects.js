import React from "react";
import "../styles/Projects.css";
// import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
// import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const importAll = (r) => {
      return r.keys().map(r);
    };
    const drawings = importAll(
      require.context("./../../public/assets/art", false, /\.(png|jpe?g|JPG)$/)
    );

    const projects = {
      "Data-Driven Modeling of Pulmonary Hypertension": {
        title: "Data-Driven Modeling of Pulmonary Hypertension",
        desc: "Towards understanding the condition that is Pulmonary Hypertension. We applied unsupervised clustering to devise a new paradigm for pulmonary hypertension risk stratification, and we trained classifiers to predict pressure-volume states.",
        techStack: "SciKit Learn, Pandas, Numpy, Seaborn",
        journal: "Journal of the American Heart Association",
        // link: "https://www.ahajournals.org/doi/full/10.1161/JAHA.119.016031",
        image: "/assets/PCM.png",
      },
      "Assessing Associations Between COVID-19 Symptomology and Adverse Outcomes":
        {
          desc: "Scripted an automated pipeline to crowdsource survey responses for a COVID-19 study. We evaluated and quantified the association between COVID-19 symptoms and chronic conditions. ",
          techStack: "Python, Qualtrics, Amazon Mechanical Turk",
          journal: "JMIR Formative Research",
          link: "https://formative.jmir.org/2022/12/e37507",
          image: "/assets/Dendrogram for COVID-19 symptom clusters.png",
        },
      "Learning about Stock Market Trends": {
        desc: "Exploration into stocks, trading algorithms, and libraries for modeling and predicting trends",
        techStack: "Facebook Prophet, XGBoost, Streamlit",
        link: "https://cnmnzhang.streamlit.app/",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  {/* <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["github_link"]}
                      openLink={projects[key]["link"]}
                    ></ExternalLinks>
                  </div> */}

                  <div className="card-title">
                    <a
                      href={projects[key]["link"]}
                      target="_blank"
                      rel="noopener"
                    >
                      {key}
                    </a>
                  </div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>

        <Carousel>
          {Object.keys(drawings).map((key, i) => (
            <Carousel.Item>
              <img className="d-block w-100" src={drawings[i]} alt={key} />
              <div className="caption-bg">
                <Carousel.Caption>{/* <h3>what it is</h3> */}</Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Projects;

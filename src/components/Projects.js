import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    <link rel="stylesheet" href="carousel.css"/>
    const projects = {
        "Data-Driven Modeling of Pulmonary Hypertension": {
          title: "portfolio.js",
          desc:
            "Towards understanding the condition that is Pulmonary Hypertension. We applied unsupervised clustering to devise a new paradigm for pulmonary hypertension risk stratification, and we trained classifiers to predict pressure-volume states.",
          techStack: "SCIKIT-LEARN, PANDAS, NUMPY, MATPLOTLIB, SEABORN",
          link: "https://www.ahajournals.org/doi/full/10.1161/JAHA.119.016031",
          image: "/assets/PCM.png"
        },
      "Bonsai": {
        desc:
          "An application created for the students of Johns Hopkins University, a collection of student-driven communities for JHU courses",
        techStack: "MongoDB, Express.js, React.js, Node.js, TypeScript",
        link: "hhttps://cs421sp22-homework.github.io/project-team-11-spontaneous-bonsai/",
        image: "/assets/bonsai.png"
      },
      "Assessing Associations Between COVID-19 Symptomology and Adverse Outcomes": {
        desc:
          "Scripted an automated pipeline to crowdsource survey responses for a COVID-19 study. We evaluated and quantified the association between COVID-19 symptoms and chronic conditions. ",
        techStack: "Python, Qualtrics, Amazon Mechanical Turk",
        link: "https://formative.jmir.org/2022/12/e37507",
        image: "/assets/Dendrogram for COVID-19 symptom clusters.png"
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        {/* <Carousel>
          {Object.keys(projects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={projects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{projects[key]["title"]}</h3>
                  <p>
                    {projects[key]["desc"]}
                    <p className="techStack">
                      {projects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
        
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                {/* {const root = document.querySelector(':root');
                // set css variable
                root.style.setProperty('--my-color', 'blue')} */}

                <li className="projects-card"
                >
                  <script>
                    element.style.setProperty('--image-url', { projects[key]["image"] });
                    </script>

                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
        
      </div>

      
    );
  }
}

export default Projects;
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 400
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Institute of Computational Medicine": {
      jobTitle: "Undergraduate Research Assistant @",
      duration: "JAN 2020 - JUN 2022",
      desc: [
        "Created a multilevel classification model to predict patient portal utilization from patient MyChart data",
        "Automated a Python pipeline to crowdsource and analyze Qualtrics survey responses for a COVID-19 study hosted on Amazon Mechanical Turk",
        "Scripted electronic health record format converter for HL7 and Eventflow formats",
      ]
    },
    "Johnson & Johnson": {
      jobTitle: "Systems Engineering Intern @",
      duration: "MAY 2022 - AUG 2022",
      desc: [
        "Executed C++ tests in Linux to characterize a robotic surgery system and gather requirements values",
        "Refactored JAMA REST API methods and implemented an automated error logging strategy in Python",
        "Wrote and documented scripts to populate Airtable databases and replaced manual processes"
      ]
    },
    "JHU Applied Physics Laboratory": {
      jobTitle: "Software Development and Research Intern @",
      duration: "NOV 2021 - MAY 2022",
      desc: [
        "Developed a MERN stack journaling and message board web application with sentiment analysis of entries, emotion tracking, and user authentication and authorization functionality",
        "Conceptualized and contributed code to neuron connectomics gamification project to support player movement and background generation of large-scale neuron meshes from an API using C# in Unity"
      ]
    },
    "Delineo": {
      jobTitle: "Software Developer and Agile Product Owner @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
        "Implemented features of a scalable Wells-Riley model to simulate spread of diseases and fixed bugs",
        "Managed a team, lead meetings, and delegated tasks on a two-week sprint-based schedule",
        "Improved simulation efficiency by decreasing time taken to simulate 6 months of infection by 59%"
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
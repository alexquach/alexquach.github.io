import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import ExperienceItem from './small_comps/ExperienceItem'


import microsoftlogo from '../images/microsoftlogo.png';
import botkeeperlogo from '../images/botkeeperlogo.png';
import mitlogo from '../images/mitlogo.png';
import cogolabslogo from '../images/cogolabslogo.png';
import hucplogo from '../images/hucplogo.jpg';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

// const data = useStaticQuery(graphql`
// query {
//   dataJson {
//     hero {
//       imageAlt
//     }
//     work {
//       content
//       heading
//     }
//     about {
//       heading
//       content
//     }
//   }
//   allProjectsJson {
//     nodes {
//       name
//       link
//       alt
//       badge
//       image
//     }
//   }
// }
// `)
// const projectsItems = data.allProjectsJson.nodes

const Experience = ({
  children
}) => {
  const classes = useStyles();

  return (
    <Timeline>

      <ExperienceItem
        company="Botkeeper"
        timeframe="Fall 2020"
        role="ML Engineer Intern"
        description="Developing, Evaluating, and Deploying NLP"
        logo={botkeeperlogo}
      />

      <ExperienceItem
        company="Cogo Labs"
        timeframe="Fall 2020"
        role="Data Analyst Intern"
        description="Deriving Insights for large PE firm"
        logo={cogolabslogo}
      />

      <ExperienceItem
        company="Harvard Undergraduate Capital Partners"
        timeframe="Fall 2020"
        role="Analyst"
        description="Sourcing for ~50 VC/Angel investors"
        logo={hucplogo}
      />

      <ExperienceItem
        company="Microsoft"
        timeframe="Summer 2020"
        role="Product Manager Intern"
        description="Cross-team collaboration in Azure Machine Learning"
        logo={microsoftlogo}
      />

      <ExperienceItem
        company="Botkeeper"
        timeframe="Winter 2020"
        role="Software Engineer Intern"
        description="Automating QA Service"
        logo={botkeeperlogo}
      />

      <ExperienceItem
        company="MIT Quest for Intelligence"
        timeframe="Fall 2019"
        role="Researcher"
        description="Lowering Greenhouse Gas Emissions for MIT Facilities"
        logo={mitlogo}
      />

      <ExperienceItem
        company="Microsoft"
        timeframe="Summer 2019"
        role="Explore (SWE+PM) Intern"
        description="Release Dashboard for Azure Stack"
        logo={microsoftlogo}
      />

    </Timeline>
  );
}

export default Experience

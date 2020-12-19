import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { SvgIcon, Icon } from "@material-ui/core";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Experience = ({ role, company, description, logo, timeframe }) => {
  const classes = useStyles();

  return (
    <ScrollAnimation animateIn="animate__fadeInBottomRight" duration={1} offset={50} animateOnce={true}>
      <TimelineItem>
        <TimelineOppositeContent style={{ flex: 0.15 }}>
          {timeframe}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <span style={{ color: "white", backgroundColor: "white" }}>
            <TimelineDot variant="outlined" color="inherit">
              <Icon >
                <img src={logo} style={{width: "100%"}} />
              </Icon>
            </TimelineDot>
          </span>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <b>{role}</b> @ <b>{company}</b>
            <Typography>{description}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </ScrollAnimation>
  )
}

export default Experience
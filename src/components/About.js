import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  paper: {
    margin: "70px auto",
    backgroundColor: "transparent",
  },
  titleWrapper: {
    display: "flex",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  title: {
    fontFamily: 'NeueHaasDisplay-Mediu',
    maxWidth: "1000px",
    textTransform: "uppercase",
    fontWeight: "700",
    lineHeight: "2.3",
    letterSpacing: "0px",
  },
  text: {
    marginTop: "20px",
  },
  navigate: {
    color: "transparent",
    marginBottom: "70px",
  },
  '@media (max-width:760px)': {
    paper: {
      margin: "70px auto",
    },
  },
  '@media (max-width:520px)': {
    paper: {
      margin: "0px auto",
    },
    text: {
      fontSize: "5vw",
      lineHeight: "7vw",
    },
    navigate: {
      color: "transparent",
      marginBottom: "5em",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <div id="about" className={classes.navigate}><span>fghdfgh</span></div>
      <Paper className={classes.titleWrapper} elevation={0} data-aos='fade-up' data-aos-duration="800" data-aos-easing="ease-out" data-aos-delay="50" data-aos-once="true">
        <Typography
          className={classes.title}
          variant="h4"
        >
          about me
        </Typography>
        <svg style={{marginLeft: "7px"}} height="30" width="30">
          <circle cx="15" cy="15" r="11.5" stroke="#7a7a7a75" strokeWidth="1" fill="transparent" />
        </svg>
      </Paper>
      <Typography className={classes.text} variant="subtitle1" data-aos='fade-up' data-aos-duration="800" data-aos-easing="ease-out" data-aos-delay="100" data-aos-once="true">
        In 2018, being an experienced mechanichal engineer, I studied a year of core studies Bsc in computer science at Ben-Gurion University, where I
        acquired the theoretical and practical skills to become a software engineer.
        During this year, I have decided learning Web Development. Therefore I studied Full Stack Development at MisterBit, 
        There I studied the fundamental skills in order to work in the web industry.
        I’m now working at the heart of the digital field as a Front-End React Developer.
      </Typography>
    </Paper>
  );
};

export default About;

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  gutterBottom: {
    margin: "3em auto 1.7em",
  },
  paper: {
    backgroundColor: "transparent",
  },
  title: {
    maxWidth: "1000px",
    color: "#111213",
    // background: "radial-gradient(circle, rgba(130,234,255,1) 0%, rgba(255,255,255,1) 40%)",
  },
  navigate: {
    color: "transparent",
    marginBottom: "5em",
  },
  [theme.breakpoints.down('md')]: {
    gutterBottom: {
      margin: "3em auto 0.5em",
    },
  },
  '@media (max-width:760px)': {
    gutterBottom: {
      margin: "1.1em auto 0em",
    },
    navigate: {
      marginBottom: "5.5em",
    },
  },

}));

const Title = (props) => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init()
  })

  return (
    <Paper className={classes.paper} elevation={0} square>
      <Typography 
      className={classes.title}
      classes={{
        gutterBottom: classes.gutterBottom
      }} 
      gutterBottom
      variant="h1" data-aos="fade-in" data-aos-duration="1800" data-aos-delay="0" data-aos-once="true">
        Hey! I’m Alon, a Software Engineer & Front-End Developer.
      </Typography>
      <div id="work" className={classes.navigate}><span>&nbsp</span></div>
    </Paper>
  );
};

export default Title;

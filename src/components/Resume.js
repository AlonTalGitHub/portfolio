import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

import { resumeSections, contacts } from "../assets/data";

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "90px auto 40px",
    paddingBottom: 60,
  },
  paper: {
    backgroundColor: "transparent",
    marginBottom: "30px",
  },
  item: {
    padding: theme.spacing(3),
  },
  button: {
    display: "inline-flex",
    textDecoration: "none",
    color: "#111213",
    transition: "all 0.3s ease-out",
    background: "#F1F1F1",
    borderRadius: 30,
    padding: "10px 15px",
    marginRight: 10,
    backgroundColor: "#F1F1F1",
    "&:hover": {
      textDecoration: "none",
      color: "#8ae848",
    },
  },
  title: {
    marginTop: "30px",
    marginBottom: "40px",
  },
  bold: {
    fontWeight: 700,
  },
  text: {
    fontWeight: 300,
    color: "#8E8E8E",
  },
  [theme.breakpoints.down('lg')]: {
    grid: {
      margin: "70px auto",
    },
    item: {
      padding: theme.spacing(2),
    },
  },
  '@media (max-width:520px)': {
    grid: {
      margin: "60px auto",
    },
    item: {
      padding: theme.spacing(0),
    },
    paper: {
      marginBottom: "20px",
    },    
    title: {
      fontSize: "7vw",
      lineHeight: "9vw",
      marginBottom: "30px",
    },
  },
}));

const Resume = () => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init()
  })

  return (
    <Grid container className={classes.grid} justify="center">
      {(resumeSections) && resumeSections.map((section, sectionIdx) => (
        <Grid item xs={12} sm={6} lg={4} key={sectionIdx} className={classes.item} data-aos='fade-up' data-aos-duration="800" data-aos-easing="ease-out" data-aos-delay={resumeSections.delay} data-aos-once="true">
          <Typography className={classes.title} variant="subtitle1">
            {section.name}
          </Typography>
          {(section.content) && section.content.map((item, itemIdx) => (
            <Paper className={classes.paper} key={itemIdx} elevation={0} square>
              <Typography className={classes.bold}>
                {item.years}
              </Typography>
              <Typography className={classes.text}>
                {item.title + ' / ' + item.place}
              </Typography>
            </Paper>
          ))}
        </Grid>
      ))}
      <Grid item xs={12} lg={4} className={classes.item} data-aos='fade-up' data-aos-duration="800" data-aos-easing="ease-out" data-aos-delay="500" data-aos-once="true">
          <Typography className={classes.title} variant="subtitle1">
            Contact
          </Typography>
          {(contacts) && contacts.map((item, itemIdx) => (
            <Link href={item.link} className={classes.button} key={itemIdx}>
              <Typography className={classes.bold}>
                {item.name}  
              </Typography>
            </Link>
          ))}
        </Grid>
    </Grid>
  );
};

export default Resume;

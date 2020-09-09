import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

import { projects } from "../assets/data";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "flex-start",
    height: 650,
    width: 660,
    '@media (max-width:1050px)': {
      height: 500,
    },
    [theme.breakpoints.down("xs")]: {
      height: 420,
    },
    '@media (max-width:450px)': {
      height: 350,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  focusVisible: {},
  imageButton: {
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  headers: {
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    margin: "0px 0px 40px 50px",
  },
  subject1: {
    fontFamily: 'NeueHaasDisplay-Mediu',
    backgroundColor: "#08182554",
    borderRadius: 30,
    color: "#ffffff", 
    width: "fit-content",
    padding: "0px 15px",
    fontSize: "12px",
    lineHeight: 2.8,
    textAlign: "center",
  },
  subject2: {
    fontFamily: 'NeueHaasDisplay-Mediu',
    backgroundColor: "#5a38221f",
    borderRadius: 30,
    color: "#50250d", 
    width: "fit-content",
    padding: "0px 15px",
    fontSize: "12px",
    fontWeight: 900,
    lineHeight: 2.8,
    textAlign: "center",
  },
  title1: {
    fontFamily: 'NeueHaasDisplay-Mediu',
    marginTop: 5,
    fontSize: 50,
    fontWeight: 700,
    color: "#ffffff",
  },
  title2: {
    fontFamily: 'NeueHaasDisplay-Mediu',
    marginTop: 5,
    fontSize: 50,
    fontWeight: 700,
    color: "#50250d", 
  },
  '@media (max-width:600px)': {
    headers: {
      margin: "0px 0px 25px 25px",
    },
    title1: {
      fontSize: "9vw",
    },
    title2: {
      fontSize: "9vw",
    },
  },
}));

const Projects = () => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init()
  })
  
  return (
    <Grid container spacing={4} data-aos="fade-in" data-aos-duration="1800" data-aos-delay="0" data-aos-once="true">
      <Grid item xs={12} lg={6}>
        <Link className={classes.link} href="https://alontalgithub.github.io/pathfinding-visualizer/">
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "100%",
              backgroundImage: `url(${projects[0].url})`,
            }}
          >
            <Paper className={classes.headers} elevation={0} data-aos='fade-up' data-aos-duration="800" data-aos-easing="ease-out" data-aos-delay="50" data-aos-once="true">
              <Typography className={classes.subject1}>Front-End Development</Typography>
              <Typography className={classes.title1}>Route Finder</Typography>
            </Paper>
          </ButtonBase>
        </Link>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Link className={classes.link} href="https://alontalgithub.github.io/sorting-visualizer/">
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "100%",
              backgroundImage: `url(${projects[1].url})`,
            }}
          >
              <Paper className={classes.headers} elevation={0} data-aos='fade-up' data-aos-duration="800" data-aos-easing="ease-out" data-aos-delay="50" data-aos-once="true">
                <Typography className={classes.subject2}>Front-End Development</Typography>
                <Typography className={classes.title2}>Sorting Visualizer</Typography>
              </Paper>
          </ButtonBase>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Projects;

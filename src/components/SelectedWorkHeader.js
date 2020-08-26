import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  text: {
    maxWidth: "250px",
    color: "#7A7A7A",
  },
  headersGrid: {
    marginBottom: "10px",
  },
  '@media (max-width:730px)': {
    typography: {
      adding: theme.spacing(2),
      textAlign: "left",
    },
    text: {
      position: "absolute",
      visibility: "hidden",
    },
    headersGrid: {
      marginBottom: "0px",
    },
  },
}));

const SelectedWorkHeader = () => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init()
  })

  return (
    <Grid className={classes.headersGrid} container spacing={4} data-aos="fade-in" data-aos-duration="1800" data-aos-delay="0" data-aos-once="true">
      <Grid item xs={6}>
        <Typography className={classes.typography} variant="h2" align="right">
          Selected Work
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          className={classes.text}
          variant="h3"
          align="left"
        >
          Find below some valuable projects I have been working on!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SelectedWorkHeader;

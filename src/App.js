import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import Title from "./components/Title";
import SelectedWorkHeader from "./components/SelectedWorkHeader";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "0px auto", 
    maxWidth: "1360px",
    backgroundColor: "transparent",
  },
  '@media (max-width:1420px)': {
    paper: {
      padding: "0px 30px", 
    },
  },
  '@media (max-width:450px)': {
    paper: {
      padding: "0px 20px", 
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container direction="column">
        <Grid item container xs={12} justify="center">
          <Header/>
          <Title />
          <SelectedWorkHeader />
          <Projects />
          <About />
          <Resume />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;

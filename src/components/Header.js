import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppBar, Toolbar, Typography, List, Link, Avatar, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profileImg from "../assets/img/alon.png"
import logoImg from "../assets/img/logo.png"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: "70px",
  },
  title: {
    display: "flex",
    backgroundColor: "transparent",
    flexDirection: "row",
    flex: 1,
  },
  image: {
    margin: "0px -4px -5px -4px",
  },
  typography: {
    letterSpacing: 1,
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "2.5",
    marginRight: "10px",
  },
  link: {
    paddingRight: "40px",
    "&:hover": {
      textDecoration: "none",
      color: "#8ae848",
    },
  },
  contactLink: {
    "&:hover": {
      textDecoration: "none",
      color: "#8ae848",
    },
  },
  '@media (min-width:1300px)': {
    toolbar: {
      height: "80px",
    },
  },
  '@media (max-width:500px)': {
    link: {
      paddingRight: "20px",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const scrollToView = (id) => {
    const elmnt = document.getElementById(id)
    elmnt.scrollIntoView()
  }
    
  useEffect(() => {
    AOS.init()
  })

  return (
    <AppBar position="sticky" elevation={0} data-aos="fade-in" data-aos-duration="1800" data-aos-delay="0" data-aos-once="true">
      <Toolbar className={classes.toolbar} disableGutters={true}>
        <Paper className={classes.title} elevation={0} square>
          <Typography className={classes.typography}><img className={classes.image} src={logoImg} alt="logo" width="26" height="25"></img>lon Tal</Typography>
          <Avatar alt="Alon Tal" src={profileImg} />
        </Paper>
        <List component="nav" aria-label="main manu">
          <Link onClick={() => scrollToView("work")} component="button" className={classes.link} color="inherit" variant="body1">Work</Link>
          <Link onClick={() => scrollToView("about")} component="button" className={classes.link} color="inherit" variant="body1">About</Link>
          <Link onClick={() => window.scrollTo(0,document.body.scrollHeight)} className={classes.contactLink} component="button" color="inherit" variant="body1">Contact</Link>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

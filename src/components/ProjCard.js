import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { projects } from '../assets/data';


const useStyles = makeStyles((theme) => ({
  image: {
    position: 'relative',
    backgroundSize: 'contain',
    height: 650,
    width: 660,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
 }));

export default function ProjCard({ project }) {
  const classes = useStyles();

  return (
    <Button
      focusRipple
      className={classes.image}
      style={{
        backgroundImage: `url(${project.url})`,
        backgroundSize: 'contain',
      }}
    >
    </Button>
  );
}

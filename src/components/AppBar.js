import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, AppBar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Chip from './Chip';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function AppBarComponent() {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          Strona główna
        </Typography>
        <Chip />
      </Toolbar>
    </AppBar>
  );
}

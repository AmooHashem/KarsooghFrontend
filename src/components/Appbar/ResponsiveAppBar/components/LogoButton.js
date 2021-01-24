import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  logo: ({ size }) => ({
    height: size === 'large' ? 70 : 45,
  }),
  logoButton: ({ size }) => ({
    padding: size === 'large' ? 5 : 0,
  }),
}));

export default function LogoButton({ size = 'normal' }) {
  const classes = useStyles({ size });
  return (
    <Button className={classes.logoButton} component={Link} to="/">
      <img
        src={process.env.PUBLIC_URL + '/interlogo.png'}
        alt="logo"
        className={classes.logo}
      />
    </Button>
  );
}

// Default
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
// material components
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
// Actions

// Personalized components

const Navbar = props => (
  <AppBar position="fixed" color="primary" >
    <Toolbar className={props.classes.muiToolbar}>
      <Grid container justify="space-between" alignItems="center" >
        <Grid item>
          <Button color="inherit" onClick={() => props.push('/')}>
            <Typography variant="title" color="inherit">
              DataUp
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button color="inherit" >Boton</Button>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => ({
  push: where => dispatch(push(where)),
});


export default compose(
  withStyles(),
  connect(mapStateToProps, mapDispatchToProps),
)(Navbar);

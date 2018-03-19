// Default
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
// Material Components

import { MuiThemeProvider } from 'material-ui/styles';
// Actions

// Containers
import Navbar from '../components/navbar';
// Theme
import theme from '../styles/index';

const routes = [
  {
    path: '/',
  },
];

class RouterAdmin extends React.Component {
  render = props => (
    <MuiThemeProvider theme={theme} >
      <Navbar {...props} />
      <div style={{ paddingTop: 84, marginLeft: this.props.app.drawerOpen && theme.spacing.unit * 22 }}>
        {routes.map(route =>
          <Route key={route.path} component={route.component} path={route.path} />)
        }
      </div>
    </MuiThemeProvider>
  );
}

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RouterAdmin);

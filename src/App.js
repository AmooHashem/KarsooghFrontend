import './assets/styles/App.css';
import { CssBaseline } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { SnackbarProvider } from 'notistack';
import Pushe from 'pushe-webpush';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';
import { useHistory } from 'react-router-dom';
import Notifier from './components/Notifications/Notifications';
import { initRedirect } from './redux/actions/redirect';
import Root from './root/Root';
import MuiTheme from './theme/MuiTheme';
import RTLMuiTheme from './theme/RTLMuiTheme';
import translations from './translations';
import jss from './utils/jssRTL';
import dashboard from './containers/dashboard';
Pushe.init('ld838ykvn2n75poe');
Pushe.subscribe();

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const App = ({ dir, redirectTo, forceRedirect, initRedirect }) => {
  const history = useHistory();
  useEffect(() => {
    if (redirectTo !== null) {
      history.push(redirectTo);
      if (forceRedirect) {
        history.push(redirectTo);
        history.push('/loading/');
        history.goBack();
      } else {
        history.push(redirectTo);
      }
      initRedirect();
    }
  }, [redirectTo, forceRedirect, initRedirect, history]);

  useEffect(() => {
    document.body.dir = dir;
  }, [dir]);

  return (
    <IntlProvider translations={translations}>
      {dir === 'rtl' ? (
        <ThemeProvider theme={RTLMuiTheme}>
          <StylesProvider jss={jss}>
            <AppRout />
          </StylesProvider>
        </ThemeProvider>
      ) : (
          <ThemeProvider theme={MuiTheme}>
            <AppRout />
          </ThemeProvider>
        )}
    </IntlProvider>
  );
};

const mapStateToProps = (state) => ({
  dir: state.Intl.locale === 'fa' ? 'rtl' : 'ltr',
  redirectTo: state.redirect.redirectTo,
  forceRedirect: state.redirect.force,
});

export default connect(mapStateToProps, { initRedirect })(App);

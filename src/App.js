import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';

import MainLayout from './layouts/MainLayout';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: amber,
    secondary: indigo,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <MainLayout/>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;

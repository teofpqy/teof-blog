import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import News from './pages/news';
import Styles from './styles';

class App extends Component {
  render() {
    return (
      <div className={Styles.container}>
       <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6">TEOF's blog</Typography>
        </Toolbar>
       </AppBar>
       <Grid container className={Styles.content}>
        <News />
       </Grid>
        <footer style={{ textAlign: "center" }}>
          {"teof's blog @2018"}
        </footer>
      </div>
    );
  }
}

export default App;

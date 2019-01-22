import React, { Component } from 'react';
import News from './pages/news';
import Styles from './styles';


class App extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <header className={Styles.header}>
         {"teofpqy's blog"}
        </header>
          <News />
        <footer style={{ textAlign: "center" }}>
          {"teof's blog @2018"}
        </footer>
      </div>
    );
  }
}

export default App;

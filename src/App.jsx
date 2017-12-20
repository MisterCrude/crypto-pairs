import React from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Main from './components/layout/main/Main';
import 'font-awesome/css/font-awesome.css';

import AppStyles from './AppStyles';


class App extends React.Component {
  render() {
    return (
      <section style={AppStyles}>
        {/* Header */}
        <Header />

        {/* Main */}
        <Main />

        {/* Footer */}
        <Footer />
      </section>
    );
  }
}

export default App;

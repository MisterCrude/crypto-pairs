import React from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Main from './components/layout/main/Main';


class App extends React.Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header />

        {/* Main */}
        <Main />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;

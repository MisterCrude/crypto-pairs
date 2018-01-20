import React from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Main from './components/layout/main/Main';
import 'font-awesome/css/font-awesome.css';

import AppStyles from './AppStyles';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
        }
    }

    getWindowWidth = () => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        this.getWindowWidth();
        window.addEventListener('resize', this.getWindowWidth);
    }

    render() {
        return (
            <section style={AppStyles}>
                {/* Header */}
                <Header windowWidth={this.state.windowWidth} />

                {/* Main */}
                <Main windowWidth={this.state.windowWidth} />

                {/* Footer */}
                <Footer />
            </section>
        );
    }
}

export default App;

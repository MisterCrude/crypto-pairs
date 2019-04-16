import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import 'font-awesome/css/font-awesome.css';
import AppConfig from './config/app-config';
import AppStyles from './AppStyles';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0
        };
    }

    getDeviceType = () => {
        let deviceType = window.innerWidth < AppConfig.breakpoint ? 'Mobile' : 'Desktop';
        this.setState({ deviceType: deviceType });
    };

    componentDidMount() {
        this.getDeviceType();
        window.addEventListener('resize', this.getDeviceType);
    }

    render() {
        return (
            <section style={AppStyles}>
                {/* Header */}
                <Header deviceType={this.state.deviceType} />

                {/* Main */}
                <Main deviceType={this.state.deviceType} />

                {/* Footer */}
                <Footer deviceType={this.state.deviceType} />
            </section>
        );
    }
}

export default App;

import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Main from '../../layout/Main';
import Config from '../../config/config';
import AppStyles from './AppStyles';
import 'font-awesome/css/font-awesome.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0
        };
    }

    getDeviceType = () => {
        let deviceType = window.innerWidth < Config.breakpoint ? 'Mobile' : 'Desktop';
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

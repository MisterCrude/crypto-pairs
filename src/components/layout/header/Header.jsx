import React from 'react';
import AppConfig from '../../../config/app-config';

import HeaderStyles from './HeaderStyles';


class Header extends React.Component {
    render() {
        const { windowWidth } = this.props;
        let stylePerDevice = (windowWidth < AppConfig.breakpoint) ? HeaderStyles.mobile : HeaderStyles.desktop;

        return (
            <header style={{ ...HeaderStyles.main, ...stylePerDevice }}>
                <h1>
                    Exchange rate for BTC / LTC and etc.
                </h1>
            </header>
        );
    }
}

export default Header;
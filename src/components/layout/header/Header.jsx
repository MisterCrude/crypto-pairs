import React from 'react';

import HeaderStyles from './HeaderStyles';


class Header extends React.Component {
    render() {
        const { deviceType } = this.props;

        return (
            <header style={{ ...HeaderStyles.main, ...HeaderStyles[`main${deviceType}`] }}>
                <h1>
                    Exchange rate for BTC / LTC and etc.
                </h1>
            </header>
        );
    }
}

export default Header;
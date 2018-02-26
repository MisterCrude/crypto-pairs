import React from 'react';
import HeaderStyles from './HeaderStyles';
import * as logo from './assets/logo.svg';


const Header = ({ deviceType }) => (
    <header style={{
        ...HeaderStyles.main,
        ...HeaderStyles[`main${deviceType}`]
    }}>
        <img
            style={HeaderStyles.logo}
            src={logo}
            alt='Currency exchange'
        /><h1>Exchange rate for BTC / LTC and etc.</h1>
    </header>
);

export default Header;
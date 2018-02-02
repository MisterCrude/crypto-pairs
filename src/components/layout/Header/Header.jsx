import React from 'react';
import HeaderStyles from './HeaderStyles';


const Header = ({ deviceType }) => (
    <header style={{
        ...HeaderStyles.main,
        ...HeaderStyles[`main${deviceType}`]
    }}>
        <h1>Exchange rate for BTC / LTC and etc.</h1>
    </header>
);

export default Header;
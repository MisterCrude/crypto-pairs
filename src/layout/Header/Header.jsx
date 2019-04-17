import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyles from './HeaderStyles';
import logo from './assets/logo.svg';

const Header = ({ deviceType }) => {
    return (
        <header
            style={{
                ...HeaderStyles.main,
                ...HeaderStyles[`main${deviceType}`]
            }}
        >
            <img style={HeaderStyles.logo} src={logo} alt="Currency exchange" />
            <h1>Exchange rate for BTC / LTC and etc.</h1>
        </header>
    );
};

Header.defaultName = 'Header';
Header.propTypes = {
    deviceType: PropTypes.string
};
Header.defaultProps = {
    deviceType: 'Desktop'
};

export default Header;

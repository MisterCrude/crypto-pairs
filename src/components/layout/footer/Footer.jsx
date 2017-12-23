import React from 'react';

import FooterStyles from './FooterStyles';


class Footer extends React.Component {
    render () {
        return (
            <footer style={FooterStyles.footer}>
                <p style={FooterStyles.text}>Currency rate information provided by <a style={FooterStyles.link} href="https://www.cryptonator.com">cryptonator.com</a></p>
            </footer>
        );
    }
}

export default Footer;
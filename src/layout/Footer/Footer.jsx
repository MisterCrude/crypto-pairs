import React from 'react';
import PropTypes from 'prop-types';
import Api from '../../config/Api';
import FooterStyles from './FooterStyles';

const { name, link } = Api.getAffiliateLink;

const Footer = ({ deviceType }) => (
    <footer style={FooterStyles.footer}>
        <p
            style={{
                ...FooterStyles.text,
                ...FooterStyles[`text${deviceType}`]
            }}
        >
            Currency rate information provided by &nbsp;
            <a target="_blank" style={FooterStyles.link} href={link} rel="noopener noreferrer">
                {name}
            </a>
        </p>
    </footer>
);

Footer.defaultName = 'Footer';
Footer.propTypes = {
    deviceType: PropTypes.string
};
Footer.defaultProps = {
    deviceType: 'Desktop'
};

export default Footer;

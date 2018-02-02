import React from 'react';
import Api from '../../../config/Api';
import FooterStyles from './FooterStyles';


const {
    name,
    link
} = Api.getAffiliateLink;

const Footer = ({ deviceType }) => (
    <footer style={FooterStyles.footer}>
        <p style={{
            ...FooterStyles.text,
            ...FooterStyles[`text${deviceType}`]
        }}>
            Currency rate information provided by
            <a target="_blank" style={FooterStyles.link} href={link}>{name}</a>
        </p>
    </footer>
);

export default Footer;
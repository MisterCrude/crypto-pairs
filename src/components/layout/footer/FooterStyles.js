import variables from '../../../styles/variables';


const FooterStyles = {
    footer: {
        width: '100%',
        maxWidth: variables.widthContainerLarge,
        padding: `${variables.paddingLarge} ${variables.paddingSmall}`,
        textAlign: 'center',
    },
    text: {
        color: variables.colorFontSecond,
        fontSize: '15px',
    },
    link: {
        color: variables.colorFontSecond,
        fontWeight: '500',
    }
};

export default FooterStyles;
import variables from '../../../styles/variables';


const HeaderStyles = {
    main: {
        width: '100%',
        color: variables.colorFontSecond,
        maxWidth: variables.widthContainerLarge,
        padding: `${variables.paddingMiddle} ${variables.paddingSmall}`,
        textAlign: 'center',
        lineHeight: variables.lineHeight,
    },
    mainDesktop: { fontSize: '22px' },
    mainMobile: { fontSize: '14px' },
};

export default HeaderStyles;
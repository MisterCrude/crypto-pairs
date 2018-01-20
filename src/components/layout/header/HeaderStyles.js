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
    desktop: { fontSize: '22px' },
    mobile: { fontSize: '12px' },
};

export default HeaderStyles;
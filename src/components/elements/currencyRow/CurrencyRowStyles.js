import variables from '../../../styles/variables';

const CurrencyRowStyles = {
    row: { lineHeight: '3.2em' },
    titleLarge: { verticalAlign: 'middle' },
    titleLargeDesktop: { fontSize: variables.largeFont },
    titleLargeMobile: { fontSize: variables.middleFont },
    text: {
        fontWeight: '300',
        verticalAlign: 'middle',
    },
    textDesktop: { fontSize: variables.largeFont },
    textMobile: { fontSize: variables.middleFont },
    smallText: {
        fontWeight: '300',
        paddingLeft: '10px',
    },
    smallTextDesktop: { fontSize: variables.middleFont },
    smallTextMobile: { fontSize: variables.smallFont },
    arrow: {
        fontSize: variables.extraLargeFont,
        position: 'relative',
    },
    changeMobile: { display: 'none' },
    closeButton: {
        fontSize: variables.middleFont,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: 'middle',
        lineHeight: 1,
        cursor: 'pointer',
        position: 'relative',
        top: '-2px',
        opacity: '.4',
        background: 'transparent',
    },
};

export default CurrencyRowStyles;
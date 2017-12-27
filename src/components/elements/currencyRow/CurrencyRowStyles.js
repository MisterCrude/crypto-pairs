import variables from '../../../styles/variables';

const CurrencyRowStyles = {
    row: {
        lineHeight: '3em',
    },
    titleLarge: {
        fontSize: variables.largeFont,
        verticalAlign: 'middle',
    },
    text: {
        fontSize: variables.middleFont,
        fontWeight: '300',
        verticalAlign: 'middle',
    },
    smallText: {
        fontSize: variables.smallFont,
        fontWeight: '300',
        paddingLeft: '10px',
    },
    arrow: {
        fontSize: variables.middleFont,
    },
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
        opacity: '.5',
    },
};

export default CurrencyRowStyles;
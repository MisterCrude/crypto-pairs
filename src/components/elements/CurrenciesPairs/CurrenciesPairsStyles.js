import variables from '../../../assets/styles/variables';


const CurrenciesPairsStyles = {
    table: {
        minWidth: '450px',
        width: '100%',
    },
    spinnerWrapper: {
        textAlign: 'center',
        lineHeight: '3.4em',
    },
    spinner: {
        verticalAlign: 'middle',
        fontSize: variables.middleFont,
    },
    tableWrapperDesktop: {  },
    tableWrapperMobile: {
        border: `1px solid ${variables.gay}`,
        padding: '0 1em',
        overflowX: 'auto',
        boxSizing: 'border-box',
        borderRadius: variables.borderRadius,
    },
    errorMsg: {
        color: variables.trueRed,
        fontWeight: "100",
        textAlign: "center",
    },
};

export default CurrenciesPairsStyles;
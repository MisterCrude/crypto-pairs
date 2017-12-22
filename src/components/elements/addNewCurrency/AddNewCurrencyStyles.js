import variables from '../../../styles/variables';

const AddCurrenciesListStyles = {
    form: {
        display: 'flex',
        margin: `${variables.paddingMiddle} 0`,
    },
    fieldSet: {
        flexGrow: 1,
        border: 'none',
        padding: 0,
        marginRight: '1em',
    },
    label: {
        fontSize: '20px',
        display: 'block',
        color: variables.colorFontSecond,
        marginBottom: '0.2em',
    },
    button: {
        flexGrow: 2,
    }
};

export default AddCurrenciesListStyles;
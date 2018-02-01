import variables from '../../../styles/variables';

const AddCurrenciesListStyles = {
    formMobile: { display: 'block' },
    formDesktop: { display: 'flex' },
    form: { margin: `${variables.paddingMiddle} 0` },
    fieldSet: {
        flexGrow: 1,
        border: 'none',
        padding: 0,
    },
    fieldSetMobile: { marginBottom: '1em' },
    fieldSetDesktop: { marginRight: '1em' },
    buttonMobile: { width: '100%' },
    buttonDesktop: { },
};

export default AddCurrenciesListStyles;
import variables from '../../../styles/variables';

const SearchInputStyles = {
    fieldSet: {
        margin: 0,
        padding: 0,
        border: 'none',
        position: 'relative',
    },
    input: {
        border: `1px solid ${variables.gay}`,
        fontSize: '17px',
        width: '100%',
        fontWeight: 300,
        padding: '13px 23px',
        borderRadius: '30px',
        position: 'relative',
        zIndex: 2,
    },
};

export default SearchInputStyles;
import variables from '../../../styles/variables';

const SearchInputSuggestBoxStyles = {
    list: {
        margin: 0,
        padding: 0,
        position: 'absolute',
        background: variables.white,
        boxShadow: variables.boxShadowXSmall,
        borderBottomRightRadius: variables.borderRadius,
        borderBottomLeftRadius: variables.borderRadius,
        overflowY: 'auto',
        left: '10%',
        width: '80%',
        zIndex: 1,
    },
    listDesktop: { maxHeight: '230px' },
    listMobile: { maxHeight: '160px' },
    item: { padding: '0.5em 0.7em' },
    itemPointer: {
        cursor: 'pointer',
        padding: '0.5em 0.7em',
    },
};

export default SearchInputSuggestBoxStyles;
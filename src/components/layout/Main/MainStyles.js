import variables from '../../../assets/styles/variables';


const MainStyles = {
    container: {
        flexGrow: 1,
        width: '100%',
        maxWidth: variables.widthContainerSmall,
        backgroundColor: variables.white,
        borderRadius: variables.borderRadius,
        boxShadow: variables.boxShadow,
    },
    saveButton: {
        background: variables.white,
        fontSize: '30px',
        width: '60px',
        height: '60px',
        borderRadius: '60px',
        cursor: 'pointer',
        border: `1px solid ${variables.gay}`,
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    containerDesktop: { padding: variables.paddingLarge },
    containerMobile: { padding: variables.paddingSmall },
};

export default MainStyles;
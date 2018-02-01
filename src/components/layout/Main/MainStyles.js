import variables from '../../../styles/variables';


const MainStyles = {
    container: {
        flexGrow: 1,
        width: '100%',
        maxWidth: variables.widthContainerSmall,
        backgroundColor: variables.white,
        borderRadius: variables.borderRadius,
        boxShadow: variables.boxShadow,
    },
    containerDesktop: { padding: variables.paddingLarge },
    containerMobile: { padding: variables.paddingSmall },
};

export default MainStyles;
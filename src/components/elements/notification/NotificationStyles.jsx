import variables from '../../../styles/variables';

const NotificationStyles = {
    container: {
        position: 'relative',
        boxShadow: variables.boxShadowSmall,
        padding: `${variables.paddingSmall} ${variables.paddingLarge}`,
        verticalAlign: 'middle',
        borderRadius: variables.borderRadius,
        marginBottom: variables.paddingSmall,
        fontSize: variables.smallFont,
        fontWeight: '400',
    },
    warningType: {
        color: variables.colorNoteTextWarning,
        backgroundColor: variables.colorNoteBackgroundWarning,
    },
    errorType: {
        color: variables.colorNoteTextError,
        backgroundColor: variables.colorNoteBackgroundError,
    },
    closeButton: {
        cursor: 'pointer',
        fontSize: variables.smallFont,
        position: 'absolute',
        top: '0',
        right: '0',
        border: 'none',
        backgroundColor: 'transparent',
    },
};

export default NotificationStyles;
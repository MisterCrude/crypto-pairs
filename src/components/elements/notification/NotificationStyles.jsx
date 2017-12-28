import variables from '../../../styles/variables';

const NotificationStyles = {
    container: {
        position: 'relative',
        padding: `${variables.paddingSmall} ${variables.paddingLarge} ${variables.paddingSmall} ${variables.paddingSmall}`,
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
    warningSign: { color: '#a58613', },
    errorSign: { color: '9e0b0b', },
    sign: { marginRight: '.5em', },
    closeButton: {
        cursor: 'pointer',
        fontSize: '1.2em',
        position: 'absolute',
        top: '-3px',
        right: '0',
        border: 'none',
        backgroundColor: 'transparent',
    },
};

export default NotificationStyles;
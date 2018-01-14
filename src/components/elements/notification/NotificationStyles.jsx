import variables from '../../../styles/variables';

const NotificationStyles = {
    wrapper: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        padding: `${variables.paddingSmall} ${variables.paddingLarge}`,
        verticalAlign: 'middle',
        borderRadius: variables.borderRadius,
        fontSize: variables.extraSmallFont,
        fontWeight: '400',
        lineHeight: variables.lineHeightMiddle,
        marginBottom: variables.paddingSmall,
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
    sign: {
        transform: 'translateX(-0.8em)'
    },
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
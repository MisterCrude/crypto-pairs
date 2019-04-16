import variables from './variables';

const button = {
    gradientMiddle: {
        color: variables.white,
        boxShadow: variables.boxShadowSmall,
        cursor: 'pointer',
        backgroundImage: variables.colorGradient,
        backgroundPosition: '0 0',
        backgroundSize: '300% 300%',
        fontSize: '17px',
        fontWeight: 300,
        padding: '13px 23px',
        border: 'none',
        borderRadius: '30px',
        textTransform: 'uppercase',
    },
};

export default button;
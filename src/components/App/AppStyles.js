import variables from '../../styles/variables';
import mainBg from '../../assets/img/main-bg.png';

const AppStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: `0 ${variables.paddingSmall}`,
    backgroundColor: variables.colorBackgroundMain,
    backgroundImage: `url(${mainBg})`,
    backgroundSize: `250px`,
    color: variables.colorFontFirst,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '300'
};

export default AppStyles;

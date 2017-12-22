import variables from './styles/variables';


const AppStyles = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   minHeight: '100vh',
   padding: `0 ${variables.padding}`,
   backgroundColor: variables.colorBackgroundMain,
   backgroundImage: `url('/static/media/img/main-bg.png')`,
   backgroundSize: `250px`,
   color: variables.colorFontFirst,
   fontFamily: 'Roboto, sans-serif',
   fontWeight: '300',
};

export default AppStyles;
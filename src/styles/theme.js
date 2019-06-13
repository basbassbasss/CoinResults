import { Dimensions } from 'react-native';

import colors from './colors';

const window = Dimensions.get('window');
// const DEVICE_WIDTH = window.width;
// const DEVICE_HEIGHT = window.height;

const mainTheme = {
  screenPadding: 10,

  colors,

  header: {
    statusBarBackgroundColor: colors['grey-darkest'],
    backgroundColor: colors['grey-dark'],
  },

  body: {
    backgroundColor: colors['grey-lightest'],
  },
};


export default { ...mainTheme };

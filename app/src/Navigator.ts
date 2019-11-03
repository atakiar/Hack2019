/* eslint-disable react/jsx-props-no-spreading */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ReadScreen from './screens/Read';
import SettingsScreen from './screens/Settings';
import Theme from './config/Theme';

const theme = new Theme();

const AppNavigator = createStackNavigator(
  {
    Read: {
      screen: ReadScreen,
      navigationOptions: {
        title: 'Read',
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Options',
      },
    },
  },
  {
    initialRouteName: 'Read',
  },
);


export default createAppContainer(AppNavigator);

/* eslint-disable react/jsx-props-no-spreading */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ReadScreen from './screens/Read';
import SettingsScreen from './screens/Settings';

const AppNavigator = createStackNavigator(
  {
    Read: {
      screen: ReadScreen,
      navigationOptions: ({ navigation }) => {
        return ({
          title: 'Read',
        })
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

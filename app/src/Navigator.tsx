import React from 'react'
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { MaterialIcons } from "@expo/vector-icons";
// import HistoryScreen from "./screens/History";
import ReadScreen from "./screens/Read";
import SettingsScreen from "./screens/Settings";
import { theme } from './Main';

const AppNavigator = createBottomTabNavigator(
  {
    // History: {
    //   screen: ReadScreen,
    //   navigationOptions: ({ navigation }) => {
    //     return {
    //       title: "History"
    //     };
    //   }
    // },
    Read: {
      screen: ReadScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Read'
        };
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Settings'
        };
      }
    }
  }, {
  initialRouteName: "Read",
  tabBarOptions: {
    showLabel: false,
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;

      let iconName;
      if (routeName === 'Read') {
        iconName = 'accessibility';
      } else if (routeName === 'Settings') {
        iconName = 'settings';
      }

      return <MaterialIcons name={iconName} size={36} color={focused && theme ? theme.primary : 'gray'} style={{ textAlign: 'center' }} />

    },
    tabBarComponent: props => {
      return <BottomTabBar {...props} style={{ backgroundColor: theme.backgroundColor }} />
    }
  })
});


// {
//    
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;

//         let iconName;
//         if (routeName === "Home") {
//           iconName = `ios-information-circle${focused ? "" : "-outline"}`;
//         } else if (routeName === "Settings") {
//           iconName = `ios-options`;
//         }

//         // You can return any component that you like here!
//         return <MaterialIcons name={ iconName } size = { iconSize } color = { theme.primaryText } style = {{ textAlign: 'center' }
//       }/>;
//   },
//   tabBarOptions: {
//   activeTintColor: "tomato",
//   inactiveTintColor: "gray"
// }})}
export default createAppContainer(AppNavigator);

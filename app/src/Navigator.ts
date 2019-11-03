/* eslint-disable react/jsx-props-no-spreading */
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HistoryScreen from "./screens/History";
import ReadScreen from "./screens/Read";
import SettingsScreen from "./screens/Settings";

const AppNavigator = createBottomTabNavigator(
  {
    History: {
      screen: ReadScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "History"
        };
      }
    },
    Read: {
      screen: ReadScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Lumen"
        };
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Settings"
        };
      }
    }
  },
  {
    initialRouteName: "Read",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === "Settings") {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(AppNavigator);

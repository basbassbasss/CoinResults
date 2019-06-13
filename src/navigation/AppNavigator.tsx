import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import theme from 'styles/theme';
import DevelopmentScreen from 'screens/DevelopmentScreen';
import DashboardScreen from 'screens/DashboardScreen';

// const HomeScreen = () => (
// //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //     <Text>Home Screen</Text>
// //   </View>
// // );

const AppNavigator = createStackNavigator({
  DashboardScreen: {
    screen: DashboardScreen,
  },
}, {
  cardStyle: {
    backgroundColor: theme.body.backgroundColor,
  },
});

export default createAppContainer(AppNavigator);

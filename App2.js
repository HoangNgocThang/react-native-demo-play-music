import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ProfileScreen: ProfileScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App2 = () => {
  return <AppContainer />;
};

export default App2;

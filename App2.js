import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const IntroStack = createStackNavigator(
  {
    SplashScreen: SplashScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

const AppStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ProfileScreen: ProfileScreen,
    ProductsScreen: ProductsScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      IntroStack: IntroStack,
      WelcomeScreen: WelcomeScreen,
      AppStack: AppStack,
    },
    {
      initialRouteName: 'IntroStack',
    },
  ),
);

const App2 = () => {
  return <AppContainer />;
};

export default App2;

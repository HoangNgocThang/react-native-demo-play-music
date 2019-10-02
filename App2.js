import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import DetailHomeScreen from './src/screens/DetailHomeScreen';
import Tab2Screen from './src/screens/Tab2Screen';
import Tab1Screen from './src/screens/Tab1Screen';

const IntroStack = createStackNavigator(
  {
    SplashScreen: SplashScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

const BottomTab = createMaterialBottomTabNavigator(
  {
    Tab1Screen: Tab1Screen,
    Tab2Screen: Tab2Screen,
  },
  {
    initialRouteName: 'Tab1Screen',
  },
);

const AppStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ProfileScreen: ProfileScreen,
    ProductsScreen: ProductsScreen,
    DetailHomeScreen: DetailHomeScreen,
    BottomTab: BottomTab,
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

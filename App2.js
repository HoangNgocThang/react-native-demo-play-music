import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Tab2Screen from './src/screens/Tab2Screen';
import Tab1Screen from './src/screens/Tab1Screen';
import Tab3Screen from './src/screens/Tab3Screen';
import Tab4Screen from './src/screens/Tab4Screen';
import LoginScreen from './src/screens/LoginScreen';

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
    ProfileScreen: ProfileScreen,
    ProductsScreen: ProductsScreen,
  },
  {
    initialRouteName: 'ProfileScreen',
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    LoginScreen: LoginScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    BottomTab: BottomTab,
    HomeScreen: HomeScreen,
    Tab3Screen: Tab3Screen,
    Tab4Screen: Tab4Screen,
  },
  {
    initialRouteName: 'BottomTab',
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      IntroStack: IntroStack,
      AuthStack: AuthStack,
      WelcomeScreen: WelcomeScreen,
      DrawerStack: DrawerNavigator,
      AppStack: AppStack,
      BottomTab: BottomTab,
    },
    {
      initialRouteName: 'DrawerStack',
    },
  ),
);

const App2 = () => {
  return <AppContainer />;
};

export default App2;

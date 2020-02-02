import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import GetstartScreen from './src/screens/GetstartScreen';
import LandingScreen from './src/screens/LandingScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import AccountScreen from './src/screens/AccountScreen';


const switchNavigator = createSwitchNavigator({
  loginMenu: createStackNavigator({
    Getstart: { screen: GetstartScreen },
    Landing: { screen: LandingScreen },
    Signin: { screen: SigninScreen },
    Signup: { screen: SignupScreen },
  }),
  bottomMenu: createBottomTabNavigator({
    Account: { screen: AccountScreen }
  })
})

export default createAppContainer(switchNavigator)

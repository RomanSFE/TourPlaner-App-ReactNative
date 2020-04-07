import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import GetstartScreen from './src/screens/GetstartScreen';
import LandingScreen from './src/screens/LandingScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import AccountScreen from './src/screens/AccountScreen';
import ExplorerScreen from './src/screens/ExplorerScreen';
import MyTripsScreen from './src/screens/MyTripsScreen';
import MakeTourScreen from './src/screens/MakeTourScreen';
import EditAccountScreen from './src/screens/EditAccountScreen';
import LocationDetails from './src/screens/LocationDetails';


const switchNavigator = createSwitchNavigator({
  loginMenu: createStackNavigator({
    Getstart: { screen: GetstartScreen },
    Landing: { screen: LandingScreen },
    Signin: { screen: SigninScreen },
    Signup: { screen: SignupScreen },
    EditAccount: { screen: EditAccountScreen },
    LocationDetails: { screen: LocationDetails },
  }),
  bottomMenu: createBottomTabNavigator({
    Explorer: { screen: ExplorerScreen },
    MyTrips: { screen: MyTripsScreen },
    MakeTour: { screen: MakeTourScreen },
    Account: { screen: AccountScreen },
  })
})

export default createAppContainer(switchNavigator)

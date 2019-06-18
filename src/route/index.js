import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';
import HomeStack from './routerStack/Home';

const AppStack = createBottomTabNavigator(
  {
    HomeTab: { screen: HomeStack },
    MapTab: {},
    ListTab: {},
    ProfileTab: {},
  },
  {
    initialRouteName: 'HomeTab',
    tabBarPOsotion: 'bottom',
    navigationOption: {
      swipeEnabled: false,
    },
  },
);

const MyApp = createStackNavigator(
  {
    MainPage: {
      screen: AppStack,
    },
  },
  {
    initialRouteName: 'HomeTab',
    tabBarPOsotion: 'bottom',
    navigationOption: {
      swipeEnabled: false,
    },
  },
);

export default class AppNavigator extends Component {
  render() {
    return <MyApp />;
  }
}

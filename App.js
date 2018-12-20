import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  Animated,
  Easing,
} from 'react-native';

import login from './app/screens/login.js';
import signup from './app/screens/signup.js';
import home from './app/screens/home.js';
import drawer from './app/config/drawer.js';

import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <Stack />
    );
  }
}


const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const Stack = createStackNavigator({
  Login: { screen: login },
  SignUp: { screen: signup },
  Navi: {
  screen: drawer,
  navigationOptions: {
    header: null
  }
  }
  }, {
    navigationOptions: {
      gesturesEnabled: false
    },
    transitionConfig: noTransitionConfig
});

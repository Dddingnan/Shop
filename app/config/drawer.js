import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { createStackNavigator,createDrawerNavigator,DrawerItems } from 'react-navigation';
import footer from '../config/footer.js';
import drawercontent from './drawercontent'


const InnerStackNavigator = createStackNavigator({
  TabNavigator: {
    screen: footer,
    navigationOptions: {
      header: null
    }
  }
});



const Drawer = createDrawerNavigator({
    首頁: {
      screen: InnerStackNavigator
    }
  },{
    drawerBackgroundColor:'white',
    contentOptions:{
      inactiveTintColor:'red'
    },
    contentComponent:drawercontent

})

export default Drawer;

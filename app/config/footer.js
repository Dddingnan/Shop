import React, { Component } from 'react';
import { Button, Text, View, Alert,ScrollView,SafeAreaView,Dimensions } from 'react-native';
import { createStackNavigator,
         createBottomTabNavigator,
         createDrawerNavigator,
         DrawerItems,
         DrawerActions
        } from 'react-navigation';
import { Icon } from 'react-native-elements';

import home from '../screens/home.js';
import setting from '../screens/setting.js';
import detail from '../screens/detail.js';
import shop from '../screens/shop.js';
import de2 from '../screens/de2.js';


const HomeStack = createStackNavigator({
  Home: { screen: home },
  Details: { screen: detail },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: setting },
  Details: { screen: detail },
});


const ShopStack = createStackNavigator({
  Shop: { screen: shop },
  Details: { screen: detail },
  De2: { screen: de2 },
});


const Footer = createBottomTabNavigator(
  {
    Home: { screen: HomeStack,
		navigationOptions: {
		tabBarLabel: 'Home',
		tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />
		  },
		},

		Shop: { screen: ShopStack,
		navigationOptions: {
		tabBarLabel: 'Shop',
		tabBarIcon: ({ tintColor }) => <Icon name="check" size={30} color={tintColor} />,
			},

      tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'blue',
        },
      }

		},

    Settings: { screen: SettingsStack,
		navigationOptions: {
		tabBarLabel: 'Setting',
		tabBarIcon: ({ tintColor }) => <Icon name="settings" size={30} color={tintColor} />,
			},
		},


  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: 'gray',
    },
  }
);


export default Footer;

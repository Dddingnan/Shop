import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';
import { Icon } from 'react-native-elements';

class Shop extends Component {

  static navigationOptions = ({ navigation }) => ({
      title: "Shop",
      headerLeft: (
        <Icon name="menu" size={30}
        color={'white'}
        containerStyle={{paddingLeft: 10}}
        onPress={() => navigation.openDrawer()}
        underlayColor={'rgba(255,255,255,0)'}
        />
      ),
      headerStyle: {
      backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

  })
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>購物!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to De2"
          onPress={() => this.props.navigation.navigate('De2')}
        />
      </View>
    );
  }
}


export default Shop;

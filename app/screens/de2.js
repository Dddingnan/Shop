import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';

class Details extends Component {

  static navigationOptions = {
  title: 'Details',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>細節!</Text>
      </View>
    );
  }
}

export default Details;

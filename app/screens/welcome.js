import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  Asyncstorage
} from 'react-native';

class Welcome extends React.Component {

  static navigationOptions = {
  header: null,
  };


  aa(){
    this.props.navigation.navigate('Navi')

  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center',
    backgroundColor:'white',paddingTop:50 }}>
        <Text style={{ fontSize:16 }}>歡迎</Text>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Go to Login"
          onPress={() => this.aa()}
        />
        <Button
          title="Go to SignUp"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>

      </View>
    );
  }
}



export default Welcome;

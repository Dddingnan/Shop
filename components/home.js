import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Modal from "react-native-modal";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Slider,SearchBar } from 'react-native-elements'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component<{}> {

  constructor(props){
  super(props)
  this.state = {
      value:0.2,
      }
  }


  state = {
  ModalVisible:false
  };



  hide(){
  this.setState({ ModalVisible: false });
  }

  show(){
  this.setState({ ModalVisible: true });
  }

  render() {
    return (

      <View style={styles.container}>


      <Image style = {{
        width: scale(200),
        height: verticalScale(200),}}
        source = {require('../images/b.jpg')}/>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <Text style={{fontSize:moderateScale(30)}}>
          測試字型
        </Text>


        <TouchableOpacity
        onPress={() => this.show()}
        >
        <Text style={styles.instructions}>
        開啟Modal
        </Text>
        </TouchableOpacity>


        <View style={{alignItems: 'stretch', justifyContent: 'center'}}>
          <Slider
            value={this.state.value}
            onValueChange={(value) => this.setState({value})} />
          <Text>Value: {this.state.value}</Text>
        </View>



        <Modal isVisible={this.state.ModalVisible}>

        <TouchableOpacity
        onPress={() => this.hide()}
        >
        <Text style={{color:'white',fontSize:20}}>
        測試測試測試測試測試測試測試測試測試測試測試測試測試
        </Text>
        </TouchableOpacity>

        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

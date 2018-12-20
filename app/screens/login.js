import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  AsyncStorage,
  Platform,
  ImageBackground,
} from 'react-native';
import styles from '../config/styles';
import firebase from 'react-native-firebase';
import { Icon } from 'react-native-elements';
import { scale, verticalScale } from 'react-native-size-matters';



class Welcome extends React.Component {

  static navigationOptions = {
  header: null,
  };



  constructor(props){
  super(props)
  this.state={
    email:'',
    password:'',
    }

  }

  componentWillMount() {


  }


  aa(){
    this.props.navigation.navigate('Navi')

  }

  render() {
    return (
      <KeyboardAvoidingView behavior='position'>
      <ImageBackground
      source = {require('../../images/home.gif')}
      style={styles.loginback}>

      <View style={styles.logintitle}>
        <Text style={{ fontSize:verticalScale(30),color:'white' }}>LOGO</Text>
      </View>


      <View style={styles.cont}>

      <View style={styles.input}>

      <Icon name="email"
      size={verticalScale(23)}
      containerStyle={styles.loicon}
      />
      <Text style={styles.lotext}>｜</Text>
      <TextInput
      onChangeText={(text)=>this.setState({email:text})}
      value={this.state.email}
      keyboardType='default'
      placeholder="Email"
      returnKeyType="next"
      placeholderTextColor='black'
      autoCorrect={false}
      style={styles.inputText}
      onSubmitEditing={()=>this.passwordInput.focus()}
      />
      </View>


      <View style={styles.input}>
      <Icon name="lock"
      size={verticalScale(23)}
      containerStyle={styles.loicon}/>
      <Text style={styles.lotext}>｜</Text>
      <TextInput
      onChangeText={(text)=>this.setState({password:text})}
      value={this.state.password}
      keyboardType='default'
      placeholder="Password"
      placeholderTextColor='#757171'
      returnKeyType="go"
      placeholderTextColor='black'
      secureTextEntry={true}
      maxLength={15}
      style={styles.inputText}
      ref={(input)=>this.passwordInput = input}
      />
      </View>

      <Button
      	title="Go to Login"
      	onPress={() => this.aa()}
      />

      </View>

      </ImageBackground>
      </KeyboardAvoidingView>

    );
  }
}



export default Welcome;

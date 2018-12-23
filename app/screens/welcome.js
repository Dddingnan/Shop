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
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from '../config/styles';
import firebase from 'react-native-firebase';
import { Icon } from 'react-native-elements';
import { scale, verticalScale } from 'react-native-size-matters';


import Modal from "react-native-modal";



class Welcome extends React.Component {

  static navigationOptions = {
  header: null,
  };


  constructor(props){
  super(props)
  this.state={
    signInEmail:'',
    signInPassword:'',



    signUpName:'',
    signUpPhone:'',
    signUpEmail:'',
    signUpPassword:'',


    signUpState:0,

    }

    state = {
    signUp:false,
    };

  }

  goMain(){
    this.props.navigation.navigate('Navi')

  }

  signViewClose(){
    this.setState({ signUp:false})
  }

  signViewOpen(){
    this.setState({ signUp:true})

  }

  signUp(){
    this.setState({ signUpState:1})
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword('u@test.com', '111111')
        .then((responseJson)=> {
          this.setState({ signUpState:0})
         })
        .catch((error) =>{
          Alert.alert(error)
        });

  }



  re(){

    if(this.state.signUpState==0){
      return(
        <TouchableOpacity
        style={styles.registergo}
        onPress={() => this.signUp()}
        >
        <Text style={styles.register2}>
        Register
        </Text>
        </TouchableOpacity>


      );
    }else {
      return(
        <TouchableOpacity
        style={styles.registergo}
        >
        <ActivityIndicator size="large" color="white" />
        </TouchableOpacity>
      );
    }

  }





  render() {
    return (
      <KeyboardAvoidingView behavior='position'>
      <ImageBackground
      source = {require('../../images/home.gif')}
      style={styles.loginback}>


      <View style={styles.logintitle}>
        <Text style={styles.logo}>LOGO</Text>
      </View>


      <View style={styles.cont}>

      <View style={styles.input}>

      <Icon name="email"
      size={verticalScale(23)}
      containerStyle={styles.loicon}
      />
      <Text style={styles.lotext}>｜</Text>
      <TextInput
      onChangeText={(text)=>this.setState({signInEmail:text})}
      value={this.state.signInEmail}
      keyboardType='email-address'
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
      onChangeText={(text)=>this.setState({signInPassword:text})}
      value={this.state.signInPassword}
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

      <TouchableOpacity
      style={styles.goput}
      onPress={() => this.goMain()}
      >
      <Text style={styles.gotext}>
      Go
      </Text>
      </TouchableOpacity>



      <View style={{flexDirection:'row'}}>
      <Text style={styles.signuptext}>
      Don{"'"}t have an account?
      </Text>

      <TouchableOpacity
      onPress={() => this.signViewOpen()}
      >
      <Text
      style={styles.signuptext2}
      >
      Sign up
      </Text>
      </TouchableOpacity>

      </View>

      <Modal isVisible={this.state.signUp}
      avoidKeyboard={true}
      >
      <View style={styles.signupView}>


      <View style={styles.x}>
      <TouchableOpacity
      onPress={() => this.signViewClose()}
      >
      <Icon name="x"
      type="foundation"
      size={verticalScale(23)}
      />
      </TouchableOpacity>
      </View>


      <View style={styles.registerView}>
      <Text style={styles.register}>Register</Text>
      </View>

      <View style={styles.signupinput}>
      <Icon name="user"
      type='entypo'
      size={verticalScale(23)}
      containerStyle={styles.loicon}/>
      <Text style={styles.lotext}>｜</Text>
      <TextInput
      onChangeText={(text)=>this.setState({signUpName:text})}
      value={this.state.signUpName}
      keyboardType='default'
      placeholder="Name"
      placeholderTextColor='#757171'
      placeholderTextColor='black'
      maxLength={8}
      style={styles.inputText}
      onSubmitEditing={()=>this.nameInput.focus()}
      />
      </View>

      <View style={styles.signupinput}>
      <Icon name="cellphone"
      type='material-community'
      size={verticalScale(23)}
      containerStyle={styles.loicon}/>
      <Text style={styles.lotext}>｜</Text>
      <Text style={styles.phonetext}>+886</Text>
      <Text style={styles.lotext}>｜</Text>
      <TextInput
      onChangeText={(text)=>this.setState({signUpPhone:text})}
      value={this.state.signUpPhone}
      keyboardType='number-pad'
      returnKeyType='done'
      placeholder="Phone"
      placeholderTextColor='#757171'
      placeholderTextColor='black'
      maxLength={10}
      style={styles.inputText}
      ref={(input)=>this.nameInput = input}
      onSubmitEditing={()=>this.phoneInput.focus()}
      />
      </View>

      <View style={styles.signupinput}>
      <Icon name="email"
      size={verticalScale(23)}
      containerStyle={styles.loicon}/>
      <Text style={styles.lotext}>｜</Text>
      <TextInput
      onChangeText={(text)=>this.setState({signUpEmail:text})}
      value={this.state.signUpEmail}
      keyboardType='email-address'
      placeholder="Email"
      placeholderTextColor='#757171'
      placeholderTextColor='black'
      style={styles.inputText}
      ref={(input)=>this.phoneInput = input}
      onSubmitEditing={()=>this.emailInput.focus()}
      />
      </View>

      <View style={styles.signupinput}>
      <Icon name="lock"
      size={verticalScale(23)}
      containerStyle={styles.loicon}/>
      <Text style={styles.lotext}>｜</Text>
      <TextInput
      onChangeText={(text)=>this.setState({signUpPassword:text})}
      value={this.state.signUpPassword}
      keyboardType='default'
      placeholder="Password"
      placeholderTextColor='#757171'
      returnKeyType="go"
      placeholderTextColor='black'
      secureTextEntry={true}
      maxLength={15}
      style={styles.inputText}
      ref={(input)=>this.emailInput = input}
      />
      </View>

      <View style={styles.registerView2}>
      {this.re()}
      </View>

      </View>
      </Modal>


      </View>

      </ImageBackground>
      </KeyboardAvoidingView>

    );
  }
}



export default Welcome;

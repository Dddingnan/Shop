import {StyleSheet, Platform,Dimensions} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default styles = StyleSheet.create({
    container: {
    },
    logo:{
      fontSize:verticalScale(30),
      color:'white',
      fontFamily:'AmericanTypewriter-Bold',
    },
    cont:{
      alignItems: 'center',
      marginTop:verticalScale(220),
    },
    logintitle:{
      alignItems: 'center',
      marginTop:verticalScale(80),
    },
    loginback:{
      width: '100%',
      height: '100%'
    },
    input:{
     height:verticalScale(50),
     width: scale(280),
     backgroundColor:'rgba(255,255,255,0.7)',
     fontWeight:'400',
     color:'black',
     borderRadius:verticalScale(20),
     flexDirection:'row',
     marginTop:verticalScale(20),
    },
    inputText:{
      fontSize: verticalScale(16),
      height:verticalScale(50),
      width: scale(200),
    },
    loicon:{
      paddingTop:verticalScale(13),
      paddingLeft:scale(15),
    },
    lotext:{
      paddingTop:verticalScale(15),
      fontSize: verticalScale(20),
    },
    phonetext:{
      paddingTop:verticalScale(15),
      fontSize: verticalScale(15),
    },

    goput:{
     height:verticalScale(40),
     width: scale(260),
     backgroundColor:'white',
     fontWeight:'400',
     color:'black',
     borderRadius:verticalScale(20),
     marginTop:verticalScale(20),
     alignItems:'center',
     justifyContent:'center',
    },
    gotext:{
      fontSize: verticalScale(20),
    },
    signuptext:{
      fontSize: verticalScale(15),
      marginTop:verticalScale(15),
      paddingRight:scale(10),
      fontWeight:'400',
    },
    signuptext2:{
      fontSize: verticalScale(15),
      marginTop:verticalScale(15),
      paddingRight:scale(10),
      fontWeight:'400',
      color:'white'
    },

    signupView:{
      backgroundColor:'rgba(255,255,255,0.8)',
      borderRadius:verticalScale(20),
      height:verticalScale(400)
    },

    signupinput:{
      fontWeight:'400',
      color:'black',
      borderRadius:verticalScale(20),
      flexDirection:'row',
      marginTop:verticalScale(10),
      borderColor:'black',
      borderBottomWidth:0.8,
    },
    registerView:{
      alignItems:'center',
    },
    register:{
      color:'black',
      fontSize: verticalScale(20),
      fontWeight:'bold',
      fontFamily:'AmericanTypewriter-Bold',
    },
    x:{
      alignItems:'flex-end',
      paddingRight:scale(20),
      paddingTop:scale(20),
    },
    registerView2:{
      alignItems:'center',
      marginTop:verticalScale(20),
    },
    registergo:{
      height:verticalScale(40),
      width: scale(200),
      backgroundColor:'black',
      fontWeight:'400',
      color:'black',
      borderRadius:verticalScale(20),
      alignItems:'center',
      justifyContent:'center',
    },
    register2:{
      color:'white',
      fontSize: verticalScale(20),
      fontWeight:'bold',
      fontFamily:'AmericanTypewriter-Bold',
    },






    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem:{
        padding: 10,
        borderWidth: 0.3,
        marginTop:40,
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    wrapper:{
    },

});

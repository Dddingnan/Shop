import {StyleSheet, Platform,Dimensions} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default styles = StyleSheet.create({
    container: {
    },
    cont:{
      alignItems: 'center',
      marginTop:verticalScale(270),
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

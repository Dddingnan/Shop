import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  Dimensions
} from 'react-native';
import {
         DrawerActions
        } from 'react-navigation';
import { Icon,SearchBar } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import styles from '../config/styles';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


class Home extends Component {

  static navigationOptions = ({ navigation }) => ({
      title: "首頁",
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


  constructor(props){
  super(props)
  this.state={
    id:'',
    height:'',
    fontSize:0

    }


  }



  render() {
    return (
      <ScrollView>
      <View>

      <SearchBar
      lightTheme
      searchIcon={<Icon name="search"/>}
      clearIcon={{ color: 'blue' }}
      containerStyle={{backgroundColor: 'white',}}
      inputContainerStyle={{backgroundColor: '#d9d9d9'}}
      cancelButtonTitle="取消"
      placeholderTextColor="black"
      placeholder='搜尋' />

        <Swiper style={styles.wrapper}
        height={verticalScale(240)}
        autoplay={true}
        >
          <View style={styles.slide1}>
          <Image
          style = {{
            width: Dimensions.get('window').width,
            height: verticalScale(240),}}
            source = {require('../../images/bose/a2.jpg')}
            />
          </View>
          <View style={styles.slide2}>
          <Image
          style = {{
            width: Dimensions.get('window').width,
            height: verticalScale(240),}}
            source = {require('../../images/watch/w1.jpeg')}
            />
          </View>
          <View style={styles.slide3}>
          <Image
          style = {{
            width: Dimensions.get('window').width,
            height: verticalScale(240),}}
            source = {require('../../images/xs/q3.jpg')}
            />
          </View>
        </Swiper>


        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
      </ScrollView>
    );
  }
}


export default Home;

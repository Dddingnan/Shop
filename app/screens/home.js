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

import Category from './category';

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
      headerRight: (
        <Icon name="shopping-cart" size={30}
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
    }


  }



  render() {
    return (
      <ScrollView>
      <View>

      <SearchBar
      lightTheme
      searchIcon={<Icon name="search" color="#f4511e"/>}
      clearIcon={{ color: 'blue' }}
      containerStyle={{backgroundColor: 'white',}}
      inputContainerStyle={{backgroundColor: '#d9d9d9'}}
      cancelButtonTitle="取消"
      placeholderTextColor="#f4511e"
      placeholder='搜尋'
      inputStyle={{fontWeight: 'bold'}}
      />


      <Swiper
      style={styles.wrapper}
      autoplay={true}
      height={verticalScale(240)}
      >
        <View style={styles.slide}>
        <Image
        style = {{
          width: Dimensions.get('window').width,
          height: verticalScale(240),
          margin:20,}}
          source = {require('../../images/bose/a2.jpg')}
          />
        </View>
        <View style={styles.slide}>
        <Image
        style = {{
          width: Dimensions.get('window').width,
          height: verticalScale(240),
          margin:20,}}
          source = {require('../../images/watch/w1.jpeg')}
          />
        </View>
        <View style={styles.slide}>
        <Image
        style = {{
          width: Dimensions.get('window').width,
          height: verticalScale(240),
          margin:20,}}
          source = {require('../../images/xs/q3.jpg')}
          />
        </View>
      </Swiper>


        <View>
        <Text>
        Recommendation
        </Text>
        </View>

        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        <Category
        imageUri={require('../../images/xs/q1.jpeg')}
        />

        <Category
        imageUri={require('../../images/xs/q2.jpeg')}
        />

        <Category
        imageUri={require('../../images/xs/q3.jpg')}
        />

        <Category
        imageUri={require('../../images/xs/q4.jpg')}
        />

        </ScrollView>


        <View>
        <Text>
        Hot
        </Text>
        </View>

        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        <Category
        imageUri={require('../../images/watch/w1.jpeg')}
        />

        <Category
        imageUri={require('../../images/watch/w2.jpg')}
        />

        <Category
        imageUri={require('../../images/watch/w3.jpeg')}
        />

        <Category
        imageUri={require('../../images/watch/w4.jpeg')}
        />

        </ScrollView>


        <View>
        <Text>
        Recently
        </Text>
        </View>




        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        <Category
        imageUri={require('../../images/bose/a1.jpg')}
        />

        <Category
        imageUri={require('../../images/bose/a2.jpg')}
        />

        <Category
        imageUri={require('../../images/bose/a3.jpeg')}
        />

        <Category
        imageUri={require('../../images/bose/a4.jpg')}
        />

        </ScrollView>





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

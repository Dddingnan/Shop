import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';

class Category extends Component {


  render() {
    return (
      <View style={{
          width: 130,
          height: 130,
          marginLeft:20,
          }}>
      <View
      style = {{
        flex:2,
      }}
      >
      <Image
      style = {{
        flex:1,
        width: null,
        height: null,
        resizeMode:'cover'}}
        source = {this.props.imageUri}
        />
      </View>

      <View
      style = {{
        flex:1,
      }}
      >
      <Text>
      {this.props.name}
      </Text>
      </View>

      </View>
    );
  }
}

export default Category;

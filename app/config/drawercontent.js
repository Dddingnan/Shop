import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './styles';



class DrawerContent extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Shop')}>
               Shop
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Settings')}>
              Settings
              </Text>
            </View>

            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Details')}>
              Details
              </Text>
            </View>

            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('De2')}>
              De2
              </Text>
            </View>

            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Welcome')}>
              Welcome
              </Text>
            </View>



          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerContent.propTypes = {
  navigation: PropTypes.object
};

export default DrawerContent;

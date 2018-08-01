/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RnTabNavigation from './study_test/RnTabNavigation'

export default class immoc_gp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RnTabNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('immoc_gp', () => immoc_gp);

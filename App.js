/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import HomeScreen from './app/HomeScreen'
import VideoScreen from './app/VideoScreen'

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Video: {
    screen: VideoScreen,
  },
});


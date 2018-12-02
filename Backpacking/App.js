/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { SwitchNavigator } from 'react-navigation';
// import the different screens
import Loading from './src/Loading';
import SignUp from './src/SignUp';
import Login from './src/Login';
import Main from './src/Main';
// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
);

export default App;

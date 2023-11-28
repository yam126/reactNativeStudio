/* eslint-disable react-native/no-inline-styles */
//import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class Index extends Component {
  render() {
    return (
      <WebView source={{uri: 'https://m.baidu.com'}} style={{marginTop: 20}} />
    );
  }
}

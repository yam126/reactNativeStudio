import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>index</Text>
        <Text style={{color: 'red'}}>redColor</Text>
        <Text style={[styles.h1]}>StyleTest</Text>
        <Text style={[styles.h2]}>StyleTest</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

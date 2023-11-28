/* eslint-disable no-alert */
import {StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from './storage';

export default class Index extends Component {
  storeData = async value => {
    try {
      await AsyncStorage.setItem('mytest', value);
    } catch (e) {}
  };
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('mytest');
      if (value !== null) {
        alert(value);
      }
    } catch (e) {}
  };
  addData = async value => {
    try {
      await Storage.set('mytest01', value);
    } catch (e) {}
  };
  getMyData = async () => {
    try {
      const value = await Storage.get('mytest01');
      if (value !== null) {
        alert(value);
      }
    } catch (e) {}
  };
  render() {
    return (
      <View style={[styles.container]}>
        <Button
          title="存储"
          onPress={() => {
            this.storeData('Hello RN');
          }}
        />
        <Button
          title="获取"
          onPress={() => {
            this.getData();
          }}
        />
        <Button
          title="存储01"
          onPress={() => {
            this.addData('Hello 01');
          }}
        />
        <Button
          title="获取01"
          onPress={() => {
            this.getMyData();
          }}
        />
        <Button
          title="清空"
          onPress={() => {
            Storage.clear();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

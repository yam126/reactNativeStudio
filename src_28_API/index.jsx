import {StyleSheet, View, Button, Alert} from 'react-native';
import React, {Component} from 'react';
import {getThreeDays} from './api';

export default class Index extends Component {
  getData = () => {
    // 查询三天的天气预报
    const coords = {
      longitude: 122.222,
      latitude: 39.444,
    };
    getThreeDays(coords)
      .then(res => {
        // 获取数据成功
        console.log(res);
        Alert.alert('成功', '请求成功');
      })
      .catch(err => {
        Alert.alert('报错', JSON.stringify(err));
      });
    /*let key = '687e517f06684448a9f4695721414a07';
    let location = '112.222,39.222';
    const url = `https://devapi.qweather.com/v7/weather/3d?key=${key}&location=${location}`;
    fetch(url, {method: 'GET'})
      .then(res => res.json()) // json转换
      .then(res => {
        console.log(res);
        Alert.alert('成功', '请求成功');
      })
      .catch(err => {
        Alert.alert('报错', JSON.stringify(err));
      });*/
  };
  render() {
    return (
      <View style={[styles.container]}>
        <Button title="点击获取数据" onPress={this.getData} />
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

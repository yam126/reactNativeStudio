/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import TakePictureScreen from '../screens/Home/TakePicture';

const Stack = createStackNavigator();

export default class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="TackPicture" component={TakePictureScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '首页', //自定义标题栏的标题
            // 自定义标题栏样式
            headerStyle: {
              backgroundColor: '#00b38a', // 自定义标题栏背景颜色
              elevation: 0, //删除android上的阴影
              shadowOpacity: 0, //删除IOS上的阴影
            },
            headerTintColor: '#fff', ///设置导航标题栏字体颜色
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('TackPicture');
                  }}>
                  <Text style={{marginRight: 15, fontSize: 18, color: 'white'}}>
                    拍照
                  </Text>
                </TouchableOpacity>
              );
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

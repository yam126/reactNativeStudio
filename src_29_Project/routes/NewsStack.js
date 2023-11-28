import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewsScreen from '../screens/News';
import DetailScreen from '../screens/News/Detail';

const Stack = createStackNavigator();

export default class NewsStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{
            title: '新闻详情', //自定义标题栏的标题
            // 自定义标题栏样式
            headerStyle: {
              backgroundColor: '#fff', // 自定义标题栏背景颜色
            },
          }}
        />
        <Stack.Screen
          name="NewsDetail"
          component={DetailScreen}
          options={{
            title: '新闻列表', //自定义标题栏的标题
            // 自定义标题栏样式
            headerStyle: {
              backgroundColor: '#fff', // 自定义标题栏背景颜色
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

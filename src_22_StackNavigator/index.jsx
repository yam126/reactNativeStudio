/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen(prop) {
  // 跳转方法prop.navigation.navigate参数是路由名称也就是Stack.Screen name
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>HomeScreen</Text>
      <Button
        title={'跳到新闻页面'}
        onPress={() => prop.navigation.navigate('News')}
      />
    </View>
  );
}

function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>NewsScreen</Text>
      <Button
        title={'跳转到Home页面'}
        onPress={() => prop.navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default class Index extends Component {
  render() {
    // Stack.Screen name代表路由的名称
    // initialRouteName="路由名称" 指定默认的路由页面
    // 如果不指定initialRouteName那么第一条(也就是Home)为默认路由
    // headerMode可以隐藏默认的标题栏
    return (
      <Stack.Navigator
        initialRouteName="News"
        //headerMode={'none'}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '首页', //自定义标题栏的标题
            // 自定义标题栏样式
            headerStyle: {
              backgroundColor: 'tomato', // 自定义标题栏背景颜色
            },
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => Alert.alert('Hello')}>
                  <Text style={{marginRight: 15}}>Hello</Text>
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

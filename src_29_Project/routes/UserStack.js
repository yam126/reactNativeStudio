import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens/User';
import AboutScreen from '../screens/User/About';
import LoginScreen from '../screens/NoAuth/Login';
import RegistrScreen from '../screens/NoAuth/Registr';
import CounterScreen from '../screens/User/Counter';

const Stack = createStackNavigator();

export default class UserStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            title: '个人中心', //自定义标题栏的标题
            // 自定义标题栏样式
            headerStyle: {
              backgroundColor: '#fff', // 自定义标题栏背景颜色
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: '关于', //自定义标题栏的标题
            // 自定义标题栏样式
            headerStyle: {
              backgroundColor: '#fff', // 自定义标题栏背景颜色
            },
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registr" component={RegistrScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

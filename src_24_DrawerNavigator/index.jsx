/* eslint-disable react/no-unstable-nested-components */
import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
/**
 * drawer编译错误[Reanimated] `valueUnpacker` is not a worklet, js engine: hermes
 * 的解决办法 参考文章https://blog.csdn.net/lxyoucan/article/details/121851577
 * 第一步
 * 修改配置文件babel.config.js(在项目根目录)并增加plugins: ['react-native-reanimated/plugin'],
 * 示例:
 * module.exports = {
 *   presets: [‘module:metro-react-native-babel-preset’],
 *   plugins: [‘react-native-reanimated/plugin’],
 * };
 * 第二步
 * cmd命令行进入项目根目录，然后执行
 * yarn start --reset-cache
 * 清除缓存
 * 以上执行完毕之后
 * 关掉模拟器重新执行项目即可正常
 */

function HomeScreen(prop) {
  // 跳转方法prop.navigation.navigate参数是路由名称也就是Stack.Screen name
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>HomeScreen</Text>
      <Button
        title={'Open Drawer'}
        onPress={() => prop.navigation.openDrawer()}
      />
      <Button
        title={'Toggle Drawer'}
        onPress={() => prop.navigation.toggleDrawer()}
      />
    </View>
  );
}

function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>NewsScreen</Text>
      <Button
        title={'Open Drawer'}
        onPress={() => prop.navigation.openDrawer()}
      />
      <Button
        title={'跳转到Home页面'}
        onPress={() => prop.navigation.navigate('Home')}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default class Index extends Component {
  render() {
    return (
      <Drawer.Navigator
        // 这里新版本和教程有变化，新版本属性写在screenOptions里
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 180,
          },
          drawerPosition: 'right', // 控制菜单从左left或者右right弹出
          drawerType: 'slide', // 菜单的滑动形式
          drawerActiveTintColor: 'red', // 当前激活的菜单颜色
          // 设置菜单项的样式
          drawerItemStyle: {
            marginVertical: 20,
          },
        }}>
        <Drawer.Screen
          options={{
            title: '首页', // 自定义当前项的标题
            drawerIcon: ({focused, color, size}) => {
              let iconName = '';
              iconName = focused ? 'home' : 'home-outline';
              return <Icon name={iconName} size={size} color={color} />;
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          options={{
            title: '新闻', // 自定义当前项的标题
            drawerIcon: ({focused, color, size}) => {
              let iconName = '';
              iconName = focused ? 'person' : 'person-outline';
              return <Icon name={iconName} size={size} color={color} />;
            },
          }}
          name="News"
          component={NewsScreen}
        />
      </Drawer.Navigator>
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

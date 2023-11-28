/* eslint-disable react/no-unstable-nested-components */
import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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

const Tab = createBottomTabNavigator();

export default class Index extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'News') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato', //当前项目激活后的颜色
          inactiveTintColor: 'gray', //未激活的颜色
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
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

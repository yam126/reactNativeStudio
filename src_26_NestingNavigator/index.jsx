import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function FeedScreen(props) {
  // 跳转方法prop.navigation.navigate参数是路由名称也就是Stack.Screen name
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>HomeScreen</Text>
      <Button
        title={'跳到Profile页面'}
        onPress={() => props.navigation.navigate('Profile')}
      />
      <Button
        title={'跳到Settings页面'}
        onPress={() => props.navigation.navigate('Settings')}
      />
    </View>
  );
}

function MessagesScreen(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>NewsScreen</Text>
    </View>
  );
}

function ProfileScreen(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>ProfileScreen</Text>
    </View>
  );
}

function SettingsScreen(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>SettingsScreen</Text>
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default class Index extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
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

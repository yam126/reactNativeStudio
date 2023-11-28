import {View, Alert, Button, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  createTwoButtonAlert = () => {
    Alert.alert('警告标题', '警告内容', [
      {text: '取消', onPress: () => console.log('Cancel'), style: 'cancel'},
      {text: '确定', onPress: () => console.log('Ok'), style: 'default'},
    ]);
  };
  createThreeButtonAlert = () => {
    Alert.alert('更新提示', '发现新版本是否现在更新？', [
      {text: '取消', onPress: () => console.log('Cancel'), style: 'cancel'},
      {text: '确定', onPress: () => console.log('Ok'), style: 'default'},
      {text: '稍后再试', onPress: () => console.log('稍后提醒我')},
    ]);
  };
  //注意:Button里面不能写style
  render() {
    return (
      <View styles={[styles.container]}>
        <Button
          title="Alert"
          onPress={() => {
            alert('我是一个按钮');
          }}
        />
        <Button
          title="Alert.alert"
          onPress={() => {
            Alert.alert('我是一个按钮');
          }}
          color={'red'}
        />
        <Button
          title="两个按钮"
          onPress={this.createTwoButtonAlert}
          color={'blue'}
        />
        <Button
          title="三个按钮"
          onPress={this.createThreeButtonAlert}
          color={'tomato'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

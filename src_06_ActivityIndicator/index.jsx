import {StyleSheet, View, ActivityIndicator, Platform} from 'react-native';
import React from 'react';

//加载图标
export default function index() {
  if (Platform.OS === 'android') {
    alert('当前平台是安卓');
  } else if (Platform.OS === 'ios') {
    alert('当前平台是IOS');
  }
  return (
    <View style={[styles.container]}>
      <ActivityIndicator color={'blue'} size={'large'} />
      <ActivityIndicator color={'green'} size={'small'} />
      {/*数字指定大小只在安卓应用有效*/}
      <ActivityIndicator color={'#00d0ff'} size={70} />
      <ActivityIndicator color={'red'} size={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

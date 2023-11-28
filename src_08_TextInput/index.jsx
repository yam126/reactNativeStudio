/* eslint-disable no-alert */
import {StyleSheet, View, TextInput, Dimensions, Button} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  doLogin = () => {
    alert(this.state.username);
  };
  render() {
    return (
      <View style={[styles.container]}>
        <TextInput
          value={this.state.username}
          style={[styles.input]}
          placeholder="请输入用户名"
          onChangeText={val => {
            this.setState({username: val});
          }}
        />
        {/*secureTextEntry代表是不是密码输入框*/}
        <TextInput
          style={[styles.input]}
          placeholder="请输入密码"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={val => {
            this.setState({
              password: val,
            });
          }}
        />
        <TextInput
          keyboardType="number-pad"
          style={[styles.input]}
          placeholder="手机号"
        />
        <TextInput
          style={[styles.input]}
          placeholder="请输入自我介绍"
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
        />
        <View style={[styles.btn]}>
          <Button title="登录" onPress={this.doLogin} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    width: Dimensions.get('window').width - 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 5,
  },
  btn: {
    margin: 10,
  },
});

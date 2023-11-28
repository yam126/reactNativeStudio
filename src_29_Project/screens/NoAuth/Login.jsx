/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {loginSuccess} from '../../redux/actions/User';

const mapStateToProps = state => {
  return {
    isLogin: state.User.isLogin,
  };
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      validateUsername: false,
      validatePassword: false,
      isValidUser: true,
      isValidPassword: true,
      secureTextEntry: true,
    };
  }
  validateUsername = val => {
    if (val.trim().length >= 2) {
      this.setState({
        username: val,
        validateUsername: true,
        isValidUser: true,
      });
    } else {
      this.setState({
        username: val,
        validateUsername: false,
        isValidUser: false,
      });
    }
  };
  handValidUser = val => {
    if (val.trim().length >= 2) {
      this.setState({
        isValidUser: true,
      });
    } else {
      this.setState({
        isValidUser: false,
      });
    }
  };
  validatePassword = val => {
    if (val.trim().length >= 8) {
      this.setState({
        password: val,
        validatePassword: true,
        isValidPassword: true,
      });
    } else {
      this.setState({
        password: val,
        validatePassword: false,
        isValidPassword: false,
      });
    }
  };
  updateSecureTextEnty = () => {
    if (this.state.secureTextEntry) {
      this.setState({secureTextEntry: false});
    } else {
      this.setState({secureTextEntry: true});
    }
  };
  handleLogin = () => {
    // 先判断表单的信息
    if (this.state.username.length === 0 || this.state.password === 0) {
      Alert.alert('输入错误', '用户名和密码不能为空');
      return;
    }
    if (this.state.username.length < 2) {
      Alert.alert('用户名太短', '用户名最短是2位');
      return;
    }
    if (this.state.password.length < 8) {
      Alert.alert('密码太短', '密码最短是8位');
      return;
    }
    let userInfo = {
      username: this.state.username,
      password: this.state.password,
    };
    //调用接口，执行登录
    this.props.loginSuccess(userInfo);
    Alert.alert('成功', '登录成功');
  };
  render() {
    return (
      <View style={[styles.container]}>
        <ImageBackground
          source={require('../../images/bg2.jpg')}
          style={[styles.bgImage]}>
          <View style={[styles.header]}>
            <Text style={[styles.headerText]}>Welcome!</Text>
          </View>
          <Animatable.View animation={'fadeInUpBig'} style={[styles.footer]}>
            <ScrollView>
              <View style={[styles.action]}>
                <Icon name={'person-outline'} size={20} />
                <TextInput
                  value={this.state.username}
                  style={[styles.input]}
                  placeholder="用户名"
                  onChangeText={val => this.validateUsername(val)}
                />
                {this.state.validateUsername ? (
                  <Animatable.View animation={'bounceIn'}>
                    <Icon name={'checkmark-circle-outline'} size={20} />
                  </Animatable.View>
                ) : null}
              </View>
              {this.state.isValidUser ? null : (
                <Animatable.View animation={'fadeInLeft'} duration={500}>
                  <Text style={[styles.errorMsg]}>用户名最短是2位</Text>
                </Animatable.View>
              )}
              <View style={[styles.action]}>
                <Icon name={'lock-closed-outline'} size={20} />
                <TextInput
                  value={this.state.password}
                  style={[styles.input]}
                  placeholder="密码"
                  secureTextEntry={this.state.secureTextEntry ? true : false}
                  onChangeText={val => this.validatePassword(val)}
                />
                <TouchableOpacity onPress={this.updateSecureTextEnty}>
                  {this.state.secureTextEntry ? (
                    <Icon name="eye-off-outline" size={20} />
                  ) : (
                    <Icon name="eye-outline" size={20} />
                  )}
                </TouchableOpacity>
              </View>
              {this.state.isValidPassword ? null : (
                <Animatable.View animation={'fadeInLeft'} duration={500}>
                  <Text style={[styles.errorMsg]}>密码最短是8位</Text>
                </Animatable.View>
              )}
              {/*按钮*/}
              <View style={[styles.button]}>
                <TouchableOpacity
                  style={styles.signIn}
                  onPress={() => this.handleLogin()}>
                  <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={[styles.signIn]}>
                    <Text style={[styles.textSign, {color: '#fff'}]}>登录</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Registr')}
                  style={[
                    styles.signIn,
                    {borderColor: '#009387', borderWidth: 1, marginTop: 15},
                  ]}>
                  <Text style={[styles.textSign, {color: '#009387'}]}>
                    注册
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animatable.View>
        </ImageBackground>
      </View>
    );
  }
}

export default connect(mapStateToProps, {loginSuccess})(Login);

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 150 : 100,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  input: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#055375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  errorMsg: {
    color: 'red',
    fontSize: 14,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  signIn: {
    height: 45,
    width: Dimensions.get('window').width - 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 23,
  },
});

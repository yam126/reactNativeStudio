/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
function Registr({navigation}) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    repartPassword: '',
    validateUsername: false,
    validatePassword: false,
    validateRepartPassword: false,
    isValidUser: true,
    isValidPassword: true,
    isValidRepartPassword: true,
    secureTextEntry: true,
    confirmSecureTextEntry: true,
  });
  const validateUsername = val => {
    if (val.length >= 2) {
      setData({
        ...data,
        username: val,
        isValidUser: true,
        validateUsername: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        isValidUser: false,
        validateUsername: false,
      });
    }
    console.log('validateUsername', data.validateUsername);
  };
  const validatePassword = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        validatePassword: true,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        validatePassword: false,
        isValidPassword: false,
      });
    }
  };
  const validateRepartPassword = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        repartPassword: val,
        validateRepartPassword: true,
        isValidRepartPassword: true,
      });
    } else {
      setData({
        ...data,
        repartPassword: val,
        validatePassword: false,
        isValidRepartPassword: false,
      });
    }
  };
  const updateSecureTextEnty = () => {
    if (data.secureTextEntry) {
      setData({...data, secureTextEntry: false});
    } else {
      setData({...data, secureTextEntry: true});
    }
    console.log('updateSecureTextEnty', data.secureTextEntry);
  };
  const updateConfirmSecureTextEnty = () => {
    if (data.confirmSecureTextEntry) {
      setData({...data, confirmSecureTextEntry: false});
    } else {
      setData({...data, confirmSecureTextEntry: true});
    }
    console.log('updateSecureTextEnty', data.confirmSecureTextEntry);
  };
  const handleRegist = () => {
    if (data.username === '') {
      Alert.alert('错误', '用户名不能为空');
      return;
    }
    if (data.password === '') {
      Alert.alert('错误', '密码不能为空');
      return;
    }
    if (data.repartPassword !== data.password) {
      Alert.alert('错误', '两次输入的密码不一致');
      return;
    }

    //注册成功后的操作
    Alert.alert('成功', '注册成功');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/bg3.jpg')}
        style={styles.bgImage}>
        <StatusBar backgroundColor={'#009387'} barStyle={'light-content'} />
        <View style={styles.header}>
          <Text style={styles.headerText}>用户注册</Text>
        </View>
      </ImageBackground>
      <Animatable.View animation={'fadeInUpBig'} style={styles.footer}>
        <ScrollView>
          <View style={styles.action}>
            <Icon name="person-outline" style={styles.frontIcon} size={20} />
            <TextInput
              value={data.username}
              placeholder="用户名"
              style={styles.textInput}
              onChangeText={val => validateUsername(val)}
            />
            {data.validateUsername ? (
              <Animatable.View animation={'bounceIn'}>
                <Icon
                  name={'checkmark-circle-outline'}
                  size={20}
                  style={styles.backIcon}
                />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation={'fadeInLeft'} duration={500}>
              <Text style={[styles.errorMsg]}>用户名最短是2位</Text>
            </Animatable.View>
          )}
          <View style={styles.action}>
            <Icon
              name="lock-closed-outline"
              style={styles.frontIcon}
              size={20}
            />
            <TextInput
              value={data.password}
              placeholder="密码"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              onChangeText={val => validatePassword(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEnty}>
              {data.secureTextEntry ? (
                <Icon
                  name="eye-off-outline"
                  size={20}
                  style={[styles.backIcon]}
                />
              ) : (
                <Icon name="eye-outline" size={20} style={[styles.backIcon]} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation={'fadeInLeft'} duration={500}>
              <Text style={[styles.errorMsg]}>密码最短是8位</Text>
            </Animatable.View>
          )}
          <View style={styles.action}>
            <Icon
              name="lock-closed-outline"
              style={styles.frontIcon}
              size={20}
            />
            <TextInput
              value={data.repartPassword}
              placeholder="重复密码"
              secureTextEntry={data.confirmSecureTextEntry ? true : false}
              style={styles.textInput}
              onChangeText={val => validateRepartPassword(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEnty}>
              {data.confirmSecureTextEntry ? (
                <Icon
                  name="eye-off-outline"
                  size={20}
                  style={[styles.backIcon]}
                />
              ) : (
                <Icon name="eye-outline" size={20} style={[styles.backIcon]} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidRepartPassword ? null : (
            <Animatable.View animation={'fadeInLeft'} duration={500}>
              <Text style={[styles.errorMsg]}>密码最短是8位</Text>
            </Animatable.View>
          )}
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => navigation.navigate('Login')}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={[styles.signIn]}>
                <Text style={[styles.textSign, {color: '#fff'}]}>登录</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleRegist}
              style={[
                styles.signIn,
                {borderColor: '#009387', borderWidth: 1, marginTop: 15},
              ]}>
              <Text style={[styles.textSign, {color: '#009387'}]}>注册</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

export default Registr;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    borderWidth: 1,
    height: Dimensions.get('window').height,
    borderColor: 'red',
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
    height: Dimensions.get('window').height - 280,
    paddingHorizontal: 50,
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
  frontIcon: {
    marginTop: 10,
    marginLeft: 5,
  },
  textInput: {
    width: Dimensions.get('window').width - 170,
  },
  backIcon: {
    marginTop: 10,
    //marginLeft: Dimensions.get('window').width - 200,
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
    width: Dimensions.get('window').width - 120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 23,
    color: '#fff',
  },
});

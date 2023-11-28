/* eslint-disable no-alert */
import {
  Animated,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Button,
} from 'react-native';
import React, {Component} from 'react';

export default class Index extends Component {
  // fadeAnim 将透明度设置为0
  state = {
    fadeAnim: new Animated.Value(0),
    moveAnim: new Animated.Value(0),
  };
  fadeIn = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1, //目标值
      useNativeDriver: true, //启用原生方式,渲染动画(执行效率会更高)
      duration: 5000, // 动画执行时间
    }).start(() => {
      // 动画执行结束后的回调函数
      alert('我显示出来了');
    });
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      // 动画执行结束后的回调函数
      alert('我藏起来了');
    });
  };
  componentDidMount() {
    //组件加载后触发动画
    this.scanMove();
  }
  scanMove = () => {
    // 将moveAnim的初始值设置为0
    this.state.moveAnim.setValue(0);
    Animated.timing(this.state.moveAnim, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      this.scanMove();
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: this.state.fadeAnim,
            },
          ]}>
          <Text style={styles.fadingText}>Fading View!</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="Fade In View" onPress={this.fadeIn} />
          <Button title="Fade Out View" onPress={this.fadeOut} />
        </View>
        <View style={[styles.scanContainer]}>
          <Animated.View
            style={[
              styles.border,
              {
                transform: [
                  {
                    translateY: this.state.moveAnim,
                  },
                ],
              },
            ]}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  scanContainer: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: 'green',
  },
  border: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

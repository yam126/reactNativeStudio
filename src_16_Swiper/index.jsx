import {StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Swiper from 'react-native-swiper';

export default class index extends Component {
  render() {
    // showsButtons 是否显示左右控制按钮
    // autoplay 是否自动轮播
    // 注意:轮播Swiper必须放在ScrollView容器中，放在普通View中轮播没有效果
    return (
      <ScrollView>
        <Swiper autoplay={true} showsButtons={true} style={[styles.wrapper]}>
          <Image
            style={[styles.slideImage]}
            source={require('./images/1.jpg')}
          />
          <Image
            style={[styles.slideImage]}
            source={require('./images/2.jpg')}
          />
          <Image
            style={[styles.slideImage]}
            source={require('./images/3.jpg')}
          />
        </Swiper>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slideImage: {
    height: 200,
    width: Dimensions.get('window').width,
  },
});

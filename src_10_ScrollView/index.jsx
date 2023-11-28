/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, ScrollView, Platform} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    // showsVerticalScrollIndicator 隐藏垂直方向的滚动条
    //showsHorizontalScrollIndicator 隐藏水平方向的滚动条
    // SafeAreaView 组件在有刘海屏的手机上能够避开刘海屏显示
    return (
      <View>
        <ScrollView style={{backgroundColor: '#dfb'}} horizontal={true}>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>娱乐</Text>
          <Text style={[styles.nav]}>体育</Text>
          <Text style={[styles.nav]}>财经</Text>
          <Text style={[styles.nav]}>军事</Text>
          <Text style={[styles.nav]}>时尚</Text>
          <Text style={[styles.nav]}>科技</Text>
        </ScrollView>
        <ScrollView
          style={[styles.scrollView]}
          // react-native/no-inline-styles
          contentContainerStyle={{margin: 30}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Text style={[styles.text]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quibusdam accusamus rem quo distinctio harum recusandae
            cumque laboriosam, dolores accusantium voluptatibus, id, sint
            similique reprehenderit nulla repellat tempora natus neque corporis
            deserunt numquam. At, soluta? Totam nam velit reprehenderit vel sit,
            cupiditate nemo, dolorem dolores animi maiores, ipsam voluptates
            necessitatibus commodi? Molestiae adipisci distinctio libero
            veritatis? Laboriosam quasi facilis harum amet officia voluptatem ex
            repellat sit nobis animi. Explicabo, esse. Reprehenderit ratione
            voluptatem magni cum harum quia porro vero doloribus delectus
            placeat dicta repellat dolore consectetur, architecto sequi
            molestiae, odit rem. Culpa officiis quia id fuga sed, voluptatem
            quidem placeat?
          </Text>
          {/*解决ScrollView在安卓下滚动不到底的问题*/}
          {/*// eslint-disable-next-line react-native/no-inline-styles*/}
          <View style={{height: Platform.OS === 'ios' ? 0 : 100}} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  scrollView: {
    backgroundColor: '#ddd',
    marginHorizontal: 30,
  },
  nav: {
    margin: 10,
    height: 50,
    fontSize: 30,
  },
});

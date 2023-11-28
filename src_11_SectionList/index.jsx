/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import {Text, StyleSheet, View, SafeAreaView, SectionList} from 'react-native';
import React, {Component} from 'react';

/*const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];*/

const DATA = [
  {
    title: '魏国',
    data: ['曹操', '司马懿', '张辽'],
  },
  {
    title: '蜀国',
    data: ['刘备', '关羽', '张飞'],
  },
  {
    title: '吴国',
    data: ['孙权', '周瑜', '黄盖'],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class Index extends Component {
  constructor() {
    super();
    this.state = {
      isRefresh: false,
    };
  }
  loadData = () => {
    //开启加载动画
    this.setState({
      isRefresh: true,
    });

    //模拟请求数据
    setTimeout(() => {
      this.setState({
        isRefresh: false,
      });
    }, 2000);
    alert('下拉刷新');
  };
  render() {
    // sections 数据
    // keyExtractor 唯一索引
    // renderItem 列表的渲染项目
    // renderSectionHeader 分组的列表头部
    return (
      <SafeAreaView>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          // react/no-unstable-nested-components
          ItemSeparatorComponent={() => {
            // 声明项目之间的分割符
            return (
              // react-native/no-inline-styles
              <View style={{borderBottomWidth: 1, borderBottomColor: 'red'}} />
            );
          }}
          // react/no-unstable-nested-components
          ListEmptyComponent={() => {
            // 列表数据为空时展示的组件
            return <Text style={{fontSize: 30}}>空空如也</Text>;
          }}
          //下拉刷新
          // refreshing用来标记刷新状态
          refreshing={this.state.isRefresh}
          onRefresh={() => {
            //此处为下拉刷新的具体逻辑代码
            this.loadData();
          }}
          // 上拉加载
          // onEndReachedThreshold设置列表触底还剩多少刷新0.1表示列表还剩10%的时候刷新
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            //此处为上拉加载的具体逻辑代码
            alert('到底了');
          }}
          //列表头组件
          ListHeaderComponent={() => {
            return <Text style={{fontSize: 40}}>三国英雄榜</Text>;
          }}
          //列表尾部组件
          ListFooterComponent={() => {
            return <Text style={{fontSize: 30}}>没有更多了</Text>;
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default Index;

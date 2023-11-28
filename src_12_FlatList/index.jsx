/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-alert */
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      selectedId: null,
      list: [
        {
          id: '1',
          title: '头条',
        },
        {
          id: '2',
          title: '娱乐',
        },
        {
          id: '3',
          title: '体育',
        },
        {
          id: '4',
          title: '军事',
        },
        {
          id: '5',
          title: '科技',
        },
        {
          id: '6',
          title: '财经',
        },
        {
          id: '7',
          title: '时尚',
        },
        {
          id: '8',
          title: '社会',
        },
        {
          id: '9',
          title: '北京',
        },
        {
          id: '10',
          title: '动漫',
        },
        {
          id: '11',
          title: '国际',
        },
      ],
    };
  }
  renderItem = ({index, item}) => {
    console.log(item);
    const backgroundColor =
      item.id === this.state.selectedId ? '#dfb' : '#f9c2ff';
    return (
      <TouchableOpacity
        style={[styles.item, {backgroundColor}]}
        onPress={() => {
          this.setState({selectedId: item.id});
        }}>
        <Text style={[styles.title]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  loadData = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      //模拟请求数据
      alert('刷新请求数据');
      this.setState({isLoading: false});
    }, 2000);
  };
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.list}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          horizontal={false} //是否水平布局模式
          initialScrollIndex={0} //初始化时滚动的索引位置
          initialNumToRender={4} // 指定初始渲染数据的数量，一般数量要填满一屏幕
          numColumns={1} // 设置展示多少列 数据项必须等高，无法支持瀑布流
          inverted={false} //反转列表
          extraData={this.state.selectedId}
          ItemSeparatorComponent={() => {
            //声明项目之间的分割符
            return <View style={[styles.itemSeparator]} />;
          }}
          ListEmptyComponent={() => {
            //列表数据为空时展示组件
            return <Text style={{fontSize: 30}}>空空如也</Text>;
          }}
          //下拉刷新
          refreshing={this.state.isLoading}
          onRefresh={this.loadData}
          // 上拉加载
          // onEndReachedThreshold设置列表触底还剩多少刷新0.1表示列表还剩10%的时候刷新
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            //此处为上拉加载的具体逻辑代码
            alert('到底了');
          }}
          ListHeaderComponent={() => {
            //声明列表的头部组件
            return <Text style={[styles.header]}>列表头部</Text>;
          }}
          ListFooterComponent={() => {
            //声明列表的头部组件
            return <Text style={[styles.footer]}>没有更多了</Text>;
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
    height: 150,
    width: '100%',
    //fontSize: 55,
    textAlign: 'center',
    verticalAlign: 'middle',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  footer: {fontSize: 30, textAlign: 'center'},
});

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import {getNewsList} from '../../utils/api';
import Loading from '../../coomponents/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      type: 'top',
      list: [],
      initialTypeIndex: 0,
      types: [
        {key: 'top', title: '头条'},
        {key: 'shehui', title: '社会'},
        {key: 'guonei', title: '国内'},
        {key: 'guoji', title: '国际'},
        {key: 'yule', title: '娱乐'},
        {key: 'tiyu', title: '体育'},
        {key: 'junshi', title: '军事'},
        {key: 'keji', title: '科技了'},
        {key: 'caijing', title: '财经'},
        {key: 'shishang', title: '时尚'},
      ],
    };
  }
  componentDidMount() {
    this.getList();
  }
  getList = () => {
    const type = this.state.type;
    getNewsList(type)
      .then(res => {
        console.log(res);
        this.setState({
          list: res,
        });
      })
      .catch(err => {
        Alert.alert('错误', JSON.stringify(err));
      });
  };
  newsItem = ({index, item}) => {
    if (item.thumbnail_pic_s02 && item.thumbnail_pic_s03) {
      return this.newsItemThreeImages({index, item});
    } else {
      return this.newsItemSingleImages({index, item});
    }
    //return this.newsItemSingleImages({index, item});
  };
  newsItemSingleImages = ({index, item}) => {
    // numberOfLines 控制显示的行数，超长省略
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('NewsDetail', {
            url: item.url,
            title: item.title,
            uniquekey: item.uniquekey,
          })
        }>
        <View style={[styles.newsItem1Container]}>
          <View style={[styles.newsItem1Text]}>
            <Text numberOfLines={2} style={[styles.newsItem1Title]}>
              {item.title}
            </Text>
            <View style={[styles.newsItem1Footer]}>
              <Text numberOfLines={1} style={[styles.newsItem1Meta]}>
                {item.date}
                {item.author_name}
              </Text>
              <Icon name={'heart-outline'} size={18} />
            </View>
          </View>
          <Image
            style={[styles.newsItem1Image]}
            source={{uri: item.thumbnail_pic_s}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  newsItemThreeImages = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('NewsDetail', {
            url: item.url,
            title: item.title,
            uniquekey: item.uniquekey,
          })
        }
        style={{marginVertical: 5}}>
        <View style={[styles.newsItemContainer]}>
          <Text
            style={[styles.newsItemHeader]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.title}
          </Text>
          <View>
            <View style={[styles.newsItemImageContainer]}>
              <Image
                style={[styles.newsItemImage]}
                source={{uri: item.thumbnail_pic_s}}
              />
              <Image
                style={[styles.newsItemImage]}
                source={{uri: item.thumbnail_pic_s02}}
              />
              <Image
                style={[styles.newsItemImage]}
                source={{uri: item.thumbnail_pic_s03}}
              />
            </View>
          </View>
          <View style={[styles.newsItem1Footer]}>
            <Text numberOfLines={1} style={[styles.newsItem1Meta]}>
              {item.date}
              {item.author_name}
            </Text>
            <Icon name={'heart-outline'} size={18} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  newsType = ({index, item}) => {
    let isActive = item.key === this.state.type;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState(
            {type: item.key, initialTypeIndex: index > 3 ? index - 3 : 0},
            () => {
              // 这里是setState的回调函数
              this.getList();
            },
          );
        }}>
        <View
          style={{
            width: 65,
            height: 46,
            padding: 10,
            backgroundColor: isActive ? '#dfb' : '#fff',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              color: isActive ? 'red' : '#333',
            }}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <>
        {this.state.list.length ? (
          <FlatList
            data={this.state.list}
            renderItem={this.newsItem}
            keyExtractor={item => item.uniquekey}
            ListHeaderComponent={() => {
              return (
                <FlatList
                  data={this.state.types}
                  keyExtractor={item => item.key}
                  horizontal={true}
                  renderItem={this.newsType}
                  initialScrollIndex={this.state.initialTypeIndex}
                />
              );
            }}
            ListFooterComponent={() => {
              // 列表底部
              return (
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    marginVertical: 40,
                  }}>
                  ---没有更多了---
                </Text>
              );
            }}
            ItemSeparatorComponent={() => {
              // 列表项分割线组件
              return (
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    marginVertical: 5,
                  }}
                />
              );
            }}
          />
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  newsItem1Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  newsItem1Text: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: (Dimensions.get('window').width * 2) / 3 - 20,
  },
  newsItem1Title: {
    paddingHorizontal: 10,
    fontSize: 18,
    width: (Dimensions.get('window').width * 2) / 3,
    marginBottom: 20,
  },
  newsItem1Footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  newsItem1Meta: {
    fontSize: 13,
  },
  newsItem1Image: {
    width: Dimensions.get('window').width / 3,
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  newsItemContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  newsItemImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newsItemImage: {
    width: Dimensions.get('window').width / 3 - 20,
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

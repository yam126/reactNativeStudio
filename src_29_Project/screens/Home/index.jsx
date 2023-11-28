/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
//import Geolocation from '@react-native-community/geolocation';
import {getCityInfo, getThreeDays, getIndices} from '../../utils/api';
import LinearGradient from 'react-native-linear-gradient';
import weatherIcons from '../../utils/weatherIcons';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      city: {},
      indeces: [],
      threeDays: [],
    };
  }
  componentDidMount() {
    /*Geolocation.getCurrentPosition(
      info => {
        console.log(info);
        // 获取地理位置成功后将其保存下来
        // AsyncStorage.setItem('coords', JSON.stringify(info.coords));
        // 获取地理位置成功后，调用天气接口
      },
      error => Alert.alert('报错', JSON.stringify(error)),
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );*/
    const coords = {
      longitude: 112.333,
      latitude: 39.444,
    };

    // 获取城市信息
    getCityInfo(coords).then(res => {
      console.log(res);
      this.setState({
        city: res,
      });
    });

    // 获取生活指数
    getIndices(coords).then(res => {
      console.log(res);
      this.setState({
        indeces: res,
      });
    });

    // 获取未来3天的天气预报
    getThreeDays(coords).then(res => {
      console.log(res);
      this.setState({
        threeDays: res,
      });
    });
  }
  indecesItem = ({index, item}) => {
    return (
      <TouchableOpacity
        key={'index' + item.type}
        onPress={() => {
          Alert.alert(item.type);
        }}>
        <View style={[styles.indexItem]}>
          <Text style={[styles.indexName]}>{item.name}</Text>
          <Text style={[styles.indexBase]}>{item.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <ScrollView>
          <View style={[styles.container]}>
            <TouchableOpacity onPress={() => Alert.alert('扫一扫')}>
              <View style={[styles.itemBase]}>
                <Icon name="scan-outline" size={40} color={'white'} />
                <Text style={[styles.fontBase]}>扫一扫</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('付款码')}>
              <View style={[styles.itemBase]}>
                <Icon name="qr-code-outline" size={40} color={'white'} />
                <Text style={[styles.fontBase]}>付款码</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('出行')}>
              <View style={[styles.itemBase]}>
                <Icon name="trail-sign-outline" size={40} color={'white'} />
                <Text style={[styles.fontBase]}>出行</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('卡包')}>
              <View style={[styles.itemBase]}>
                <Icon name="card-outline" size={40} color={'white'} />
                <Text style={[styles.fontBase]}>卡包</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Swiper autoplay={true} showsButtons={true} style={[styles.wrapper]}>
            <Image
              style={[styles.slideImage]}
              source={require('../../images/1.jpg')}
            />
            <Image
              style={[styles.slideImage]}
              source={require('../../images/2.jpg')}
            />
            <Image
              style={[styles.slideImage]}
              source={require('../../images/3.jpg')}
            />
          </Swiper>
          <View style={[styles.city]}>
            <Text style={[styles.cityText]}>
              {this.state.city.country}
              {this.state.city.adm1}
              {this.state.city.adm2}
            </Text>
          </View>
          <View style={[styles.indexContainer]}>
            <FlatList
              data={this.state.indeces}
              renderItem={this.indecesItem}
              keyExtractor={item => item.type}
              horizontal={true}
            />
          </View>
          <View style={[styles.dailyContainer]}>
            {this.state.threeDays.map((item, index) => {
              return (
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ddd', '#333']}
                  key={'weather' + index}
                  style={[styles.dailyItem]}>
                  <Text style={[styles.dailyItemTitle]}>{item.fxDate}</Text>
                  <View style={[styles.dailyItemContent]}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Image
                        style={[styles.weatherIcon]}
                        source={weatherIcons[item.iconDay]}
                      />
                      <Text>
                        {item.textDay} {item.tempMax}°
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Text>
                        {item.tempMin}° {item.textNight}
                      </Text>
                      <Image
                        style={[styles.weatherIcon]}
                        source={weatherIcons[item.iconNight]}
                      />
                    </View>
                  </View>
                </LinearGradient>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  itemBase: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b38a',
    height: 90,
    width: Dimensions.get('window').width / 4,
  },
  fontBase: {
    color: '#fff',
    fontSize: 14,
  },
  wrapper: {
    height: 200,
  },
  slideImage: {
    height: 200,
    width: Dimensions.get('window').width,
  },
  city: {
    flex: 1,
    justifyContent: 'center',
  },
  cityText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  indexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  indexItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#deb',
    width: Dimensions.get('window').width / 3 - 10,
    height: 80,
    marginTop: 10,
    marginRight: 10,
  },
  indexName: {
    color: '#222',
    fontSize: 14,
  },
  indexBase: {
    color: '#00b38a',
    fontSize: 15,
  },
  dailyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  dailyItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    width: Dimensions.get('window').width - 20,
    marginTop: 10,
  },
  dailyItemTitle: {
    fontSize: 20,
    color: '#eee',
    marginTop: 10,
  },
  dailyItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width - 40,
    alignItems: 'center',
    marginBottom: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

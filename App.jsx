//import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as StoreProvider} from 'react-redux';
import store from './src_29_Project/redux/store';
//import Index from './src_01_StyleSheet';
//import FlexDirection from './src_02_FlexBox/FlexDirection';
//import JustifyContent from './src_02_FlexBox/JustifyContent';
//import AlignItems from './src_02_FlexBox/AlignItems';
//import Flex from './src_02_FlexBox/Flex';
//import Index from './src_03_Dimensions';
//import Index from './src_04_AlertButton';
//import Index from './src_05_Switch_StatusBar';
//import Index from './src_06_ActivityIndicator';
//import Index from './src_07_Image';
//import Index from './src_08_TextInput';
//import Index from './src_09_Tochable';
//import Index from './src_10_ScrollView';
//import Index from './src_11_SectionList';
//import Index from './src_12_FlatList';
//import Index from './src_13_Animated';
//import Index from './src_14_Webview/WebViewHTML';
//import Index from './src_15_Picker';
//import Index from './src_16_Swiper';
//import Index from './src_17_AsyncStorage';
//import Index from './src_18_Geolocation';
//import Index from './src_19_Camera';
//import Index from './src_20_ImagePciker';
//import Index from './src_21_Loading';
//import Index from './src_22_StackNavigator';
//import Index from './src_23_BottomTab';
//import Index from './src_24_DrawerNavigator';
//import Index from './src_25_MaterialTopTabNavigator';
//import Index from './src_26_NestingNavigator';
//import Index from './src_27_PassingParameter';
//import Index from './src_28_API';
import Index from './src_29_Project';

export default class App extends Component {
  // 使用路由导航要先用NavigationContainer导航容器包裹根组件
  render() {
    return (
      <StoreProvider store={store}>
        <NavigationContainer>
          <Index />
        </NavigationContainer>
      </StoreProvider>
    );
  }
}

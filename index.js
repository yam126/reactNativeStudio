/**
 * @format
 */
import 'react-native-gesture-handler';
//注册App根组件
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-devsettings';

// OR if you are using AsyncStorage
// import 'react-native-devsettings/withAsyncStorage';
AppRegistry.registerComponent(appName, () => App);

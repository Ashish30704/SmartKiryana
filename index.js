/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'
import MyStack from './src/navigation/MyStack';

AppRegistry.registerComponent(appName, () => MyStack);

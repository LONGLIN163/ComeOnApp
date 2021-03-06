/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// AppRegistry.registerComponent(appName, () => App);


// import { Navigation } from "react-native-navigation";
// import App from "./App";
// Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
// Navigation.events().registerAppLaunchedListener(() => {
//    Navigation.setRoot({
//      root: {
//        stack: { 
//          children: [
//            {
//              component: {
//                name: 'com.myApp.WelcomeScreen'
//              }
//            }
//          ]
//        }
//      }
//   });
// });


import { Navigation } from "react-native-navigation";
import App from "./App";

Navigation.registerComponent('App', () => App);
const WelcomeScreen={
  root: {
    stack: { 
      id:"WelcomeScreen",
      children: [
        {
          component: {
            name: 'App'
          }
        }
      ]
    }
  }
}
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(WelcomeScreen);
});
import React from 'react';
import {View, Text, Button} from 'react-native';
import firebase from 'firebase';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './components/LoadingScreen';
import QuizScreen from './components/QuizScreen';
import ActiveQuiz from './components/ActiveQuiz';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCuftyK56azR-c-4aF1Qav48UwhTVsP8D0",
  authDomain: "quizauth-4200d.firebaseapp.com",
  databaseURL: "https://quizauth-4200d.firebaseio.com",
  projectId: "quizauth-4200d",
  storageBucket: "quizauth-4200d.appspot.com",
  messagingSenderId: "573050984807",
  appId: "1:573050984807:web:18498bf4481a1e7a3c37c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




const AppStack = createStackNavigator({
  Home: HomeScreen,
  Quiz: {
    screen: QuizScreen,
    navigationOptions: {
      headerTitle: "Quiz Categories"
    }
  }
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    OpenQuiz: {
      screen: ActiveQuiz,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('title'),
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: navigation.getParam('color'),
          borderBottomColor: navigation.getParam('color')
        }
      })
    }
    },
    {
      initialRouteName: "Loading"
    }
  )
)

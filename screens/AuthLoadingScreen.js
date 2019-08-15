import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import firebase from 'firebase';
import User from '../User';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount () {
    // Your web app's Firebase configuration
   var firebaseConfig = {
     apiKey: "AIzaSyBkGHS3naJoICb3upVMagJIVsA81HoU4W0",
     authDomain: "assmatdispo.firebaseapp.com",
     databaseURL: "https://assmatdispo.firebaseio.com",
     projectId: "assmatdispo",
     storageBucket: "",
     messagingSenderId: "122719599055",
     appId: "1:122719599055:web:77c9ee6da4e29ebb"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    //this.props.navigation.navigate('Auth');
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class Auth extends Component {
  state = { loggedIn: false };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA4BgWndiwamhtwG9xjyqMCpZSMVGUCq9E',
      authDomain: 'marketguide-9a6f4.firebaseapp.com',
      databaseURL: 'https://marketguide-9a6f4.firebaseio.com',
      projectId: 'marketguide-9a6f4',
      storageBucket: 'marketguide-9a6f4.appspot.com',
      messagingSenderId: '549088514796',
      appId: '1:549088514796:web:b14bb024f27af7b5',
    });
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()} textMessage="Log out" />;
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ marginTop: 200 }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>{this.renderContent()}</View>
      </View>
    );
  }
}

export default Auth;

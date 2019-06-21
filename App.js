/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import HomeRoute from './src/route/home';
import MapRoute from './src/route/map';
import ListRoute from './src/route/list';
import UserRoute from './src/route/routerStack/UserRoute';

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'map', title: 'Map', icon: 'map' },
      { key: 'list', title: 'List', icon: 'list' },
      { key: 'user', title: 'User', icon: 'contacts' },
    ],
  };

  handleIndexChange = (index) => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    map: MapRoute,
    list: ListRoute,
    user: UserRoute,
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Text>asdasd</Text> */}
        <BottomNavigation
          activeColor="#A218DC"
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={this.renderScene}
          barStyle={{
            backgroundColor: 'white',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.8,
          }}
        />
      </View>
    );
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  // ImageBackground,
  // Text,
  // ScrollView,
  // TouchableOpacity,
} from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import HeadBanner from './src/components/HeadBanner';
import AlbumList from './src/components/AlbumList';
import Search from './src/components/Search';
import HomeRoute from './src/route/routerStack/HomeRoute';
import UserRoute from './src/route/routerStack/UserRoute';
import MapRoute from './src/route/routerStack/MapRoute';

export default class App extends Component {
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
    home: HomeRoutes,
    list: ListRoutes,
    map: MapRoutes,
    user: UserRoutes,
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BottomNavigation
          activeColor="#A321BD"
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
const HomeRoutes = () => <HomeRoute />;

const UserRoutes = () => <UserRoute />;

const ListRoutes = () => (
  <View style={styles.ListBackground}>
    <View>
      <HeadBanner headerText={'Store List'} />
    </View>
    <View style={styles.topbar}>
      <Search />
    </View>
    <AlbumList />
  </View>
);

const MapRoutes = () => <MapRoute />;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // paddingLeft: 20,
    // paddingTop: 10,
    // fontSize: 14,
  },
  categoryContainer: {
    flex: 1,
  },
  ListBackground: {
    flex: 1,
    backgroundColor: '#F0F9FF',
  },
  CategorieImageRec: {
    flex: 1,
    // marginTop: -6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 160,
  },
  HomePage: {
    flex: 1,
    backgroundColor: 'white',
  },
  InnerText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  zones: {
    fontSize: 20,
    backgroundColor: 'pink',
  },
  zonesImage: {
    height: 120,
    width: 379,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },

  textOnImage: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  textOnRec: {
    flex: 70,
    flexDirection: 'row',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    marginTop: 100,
  },
  CategorieImagePro: {
    flex: 1,
    margin: 4,

    height: 180,
    width: 180,
  },
  PromoText: {
    fontSize: 16,
    color: 'white',
    backgroundColor: '#DF01D7',
    width: 85,
    fontWeight: 'bold',
  },
  EmptySpace: {
    fontSize: 100,
    color: 'white',
  },
});

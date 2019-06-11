/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, ScrollView } from 'react-native';
import { BottomNavigation, Title } from 'react-native-paper';
import HeadBanner from './src/components/HeadBanner';
import AlbumList from './src/components/AlbumList';
import Auth from './src/Auth';
import Search from './src/components/Search';

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
    home: HomeRoute,
    list: ListRoute,
    map: MapRoute,
    user: UserRoute,
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={this.renderScene}
          barStyle={{
            backgroundColor: '#82E0AA',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.7,
          }}
        />
      </View>
    );
  }
}
const HomeRoute = () => (
  <View>
    <HeadBanner headerText={'Home'} />

    <ScrollView>
      <View style={{ padding: 16 }}>
        <Title>Top Categories in Chiangmai</Title>
        <View style={{ flexDirection: 'row' }}>
          <ImageBackground
            style={styles.CategorieImageRest}
            source={{
              uri:
                'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
            }}
          >
            <Text style={styles.InnerText}>RESTAURANTS</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.CategorieImageRest}
            source={{
              uri:
                'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
            }}
          >
            <Text style={styles.InnerText}>SHOPS</Text>
          </ImageBackground>
        </View>
      </View>
      <View style={{ paddingLeft: 16, paddingTop: 2 }}>
        <Title>Zones</Title>
        <View>
          <ImageBackground
            style={styles.zonesImage}
            source={{
              uri:
                'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
            }}
          >
            <View>
              <Text style={styles.textOnImage}>Chiang Mai</Text>
              <View style={[styles.zonesText, { flex: 1 }]} />
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{ padding: 16 }}>
        <Title>Promotions</Title>
        <View style={{ flexDirection: 'row' }}>
          <ImageBackground
            style={styles.CategorieImagePro}
            source={{
              uri:
                'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
            }}
          >
            <Text style={styles.PromoText}>Promotion</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.CategorieImagePro}
            source={{
              uri:
                'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
            }}
          >
            <Text style={styles.PromoText}>Promotion</Text>
          </ImageBackground>
        </View>
      </View>
      <View style={{ padding: 16 }}>
        <Title>Recommended Stores</Title>
        <View style={{ flexDirection: 'row' }}>
          <ImageBackground
            style={styles.CategorieImageRest}
            source={{
              uri:
                'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
            }}
          >
            {/* <Text style={styles.InnerText}>RESTAURANTS</Text> */}
          </ImageBackground>
          <ImageBackground
            style={styles.CategorieImageRest}
            source={{
              uri:
                'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
            }}
          >
            {/* <Text style={styles.InnerText}>SHOPS</Text> */}
          </ImageBackground>
        </View>
      </View>
      <Text style={styles.EmptySpace}>, </Text>
    </ScrollView>
  </View>
);

const UserRoute = () => (
  <View style={{ flex: 1 }}>
    <View>
      <HeadBanner headerText={'Log In'} />
    </View>
    <Auth />
  </View>
);

const ListRoute = () => (
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

const MapRoute = () => (
  <View>
    <HeadBanner headerText={'Map'} />
  </View>
);

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
  CategorieImageRest: {
    flex: 1,
    // marginTop: -6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 180,
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

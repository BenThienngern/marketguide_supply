import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AirbnbRating } from 'react-native-elements';

const FirstRoute = () => <View style={[styles.scene, { backgroundColor: '#E4E4E4' }]} />;

const SecondRoute = () => <View style={[styles.scene, { backgroundColor: '#E4E4E4' }]} />;

const ThirdRoute = () => <View style={[styles.scene, { backgroundColor: '#E4E4E4' }]} />;

const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#E4E4E4' }]}>
    <View>
      <AirbnbRating />
    </View>
  </View>
);

export default class NavTabs extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Detail' },
      { key: 'second', title: 'Promo' },
      { key: 'third', title: 'Map' },
      { key: 'fourth', title: 'Review' },
    ],
  };

  render() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <TabView
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#A218DC' }}
              style={{ backgroundColor: 'white' }}
              labelStyle={{ color: '#777777', fontWeight: 'bold', fontSize: 14 }}
            />
          )}
          style={{ backgroundColor: 'black' }}
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
            fourth: FourthRoute,
          })}
          onIndexChange={(index) => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

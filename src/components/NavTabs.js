import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AirbnbRating } from 'react-native-elements';

export default class NavTabs extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Detail' },
      { key: 'second', title: 'Promo' },
      { key: 'third', title: 'Review' },
    ],
  };

  FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#E4E4E4' }]}>
      <View style={[styles.containerStyle]}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: this.props.shopDetail.image }}
          />
          <Image
            style={{ width: 150, height: 150, marginLeft: 4 }}
            source={{ uri: this.props.shopDetail.image }}
          />
          <Image
            style={{ width: 75, height: 75, marginLeft: 4 }}
            source={{ uri: this.props.shopDetail.image }}
          />
        </View>
        <Text style={styles.DisStyle}>{this.props.shopDetail.lang.en.description}</Text>
      </View>
      {/* <ScrollView>
        <View style={{ backgroundColor: 'blue' }}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: this.props.shopDetail.image }}
          />
          <Text style={styles.DisStyle}>{this.props.shopDetail.lang.en.description}</Text>
        </View>
      </ScrollView> */}
    </View>
  );

  SecondRoute = () => <View style={[styles.scene, { backgroundColor: '#E4E4E4' }]} />;

  ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#E4E4E4' }]}>
      <ScrollView>
        <View>
          <AirbnbRating />
        </View>
      </ScrollView>
    </View>
  );
  render() {
    console.log();
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
            first: this.FirstRoute,
            second: this.SecondRoute,
            third: this.ThirdRoute,
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
  containerStyle: {
    padding: 5,
    // flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative',
    marginTop: 16,
  },
  DisStyle: {
    fontSize: 18,
    margin: 4,
  },
});

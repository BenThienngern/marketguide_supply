import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AirbnbRating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import PromotionCard from './PromotionCard';

export default class NavTabs extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Detail' },
      { key: 'second', title: 'Promo' },
      { key: 'third', title: 'Review' },
    ],
    modalVisible: true,
  };

  onClose = () => this.setState({ modalVisible: false });

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

  SecondRoute = () => {
    if (this.props.shopDetail.id === '5ca8e46eb488447ebb07b7c7') {
      return (
        <PromotionCard
          text="Suit Discount"
          url="https://api.thaimarket.guide/images/service/download/5bfb6e138882f90001d19bd4?"
          dis="Order a complete suits from the original prize of 4400฿ (2900+1500)... "
          date="17 Jan - 17 Dec 2019"
        />
      );
    } else if (this.props.shopDetail.id === '5ca8e512b488447ebb07b7c8') {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: '#E4E4E4', flex: 1 }}>
            <View style={{ backgroundColor: 'red' }}>
              <Text>picture</Text>
              <Text>text</Text>
            </View>

            {/* <View style={{ backgroundColor: 'pink' }}>
              <PromotionCard
                text="Buy 3 get 1 free"
                url="https://api.thaimarket.guide/images/service/download/5c2064fb70967d0001a9ba41?"
                dis="For every purchase of 3 tea (include any tea that coast over 50฿)...  "
                date="02 Feb - 19 Jun 2020"
              />
            </View> */}
          </View>
        </View>
      );
    }
    return (
      <View style={[styles.scene, { backgroundColor: '#E4E4E4' }]}>
        <View style={{ marginTop: 260, alignItems: 'center' }}>
          <Icon name={'tag'} size={120} color="#6A6A6A" />
          <Text style={{ fontSize: 26, color: '#6A6A6A', fontWeight: 'bold' }}>
            No Promotion Avalible Right Now
          </Text>
        </View>
      </View>
    );
  };

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

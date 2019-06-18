import React, { Component } from 'react';
import { /*Text*/ View, ImageBackground /*TouchableOpacity*/ } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { AirbnbRating } from 'react-native-elements';
import StoreHead from './StoreHead';

class StoreFront extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'detail', title: 'Detail' },
      { key: 'promotion', title: 'Promotion' },
      { key: 'map', title: 'Map' },
    ],
  };

  handleIndexChange = (index) => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    detail: DetailRoute,
    promotion: PromotionRoute,
    map: MapRoute,
  });

  render() {
    return (
      <View>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={this.renderScene}
          barstyle={styles.viewStyle}
        />
        <View>
          <View>
            <StoreHead />
          </View>
          <AirbnbRating />
          <View style={{ flex: 1 }}>
            <ImageBackground
              style={styles.BackGround}
              source={{
                uri:
                  'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const DetailRoute = () => <Text>Music</Text>;

const PromotionRoute = () => <Text>Albums</Text>;

const MapRoute = () => <Text>Recents</Text>;

export default StoreFront;

const styles = {
  BackGround: {
    flexDirection: 'column',
  },
  viewStyle: {
    backgroundColor: '#6C23C6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 30,
    Opacity: 0.1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
};

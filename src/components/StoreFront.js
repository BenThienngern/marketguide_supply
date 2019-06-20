import React, { Component } from 'react';
import { /*Text*/ View /*TouchableOpacity*/ } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
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
          activeColor="#A321BD"
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={this.renderScene}
          // barstyle={styles.viewStyle}
        />
      </View>
    );
  }
}
const DetailRoute = () => (
  <View>
    <View>
      <StoreHead />
    </View>
    <View>
      <AirbnbRating />
      <View style={{ flex: 1 }} />
    </View>
  </View>
);

const PromotionRoute = () => (
  <View>
    <StoreHead />
  </View>
);

const MapRoute = () => (
  <View>
    <StoreHead />
  </View>
);

export default StoreFront;

// const styles = {
//   BackGround: {
//     flexDirection: 'column',
//   },
//   viewStyle: {
//     backgroundColor: '#6C23C6',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 80,
//     paddingTop: 30,
//     Opacity: 0.1,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.5,
//     elevation: 2,
//     position: 'relative',
//   },
// };

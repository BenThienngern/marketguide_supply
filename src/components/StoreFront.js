import React, { Component } from 'react';
import { /*Text*/ View, ImageBackground /*TouchableOpacity*/ } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
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
    detail: MusicRoute,
    promotion: AlbumsRoute,
    map: RecentsRoute,
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
const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

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

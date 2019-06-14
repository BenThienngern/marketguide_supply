import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

class StoreFront extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.BackGround}
          source={{
            uri:
              'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
          }}
        />
      </View>
    );
  }
}
export default StoreFront;

const styles = {
  BackGround: {
    flexDirection: 'column',
  },
};

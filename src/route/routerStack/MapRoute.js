import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Text } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import HeadBanner from '../../components/HeadBanner';

const realImg = require('../../resource/images/Real.png');

class UserRoute extends Component {
  render() {
    return (
      <View>
        <View>
          <HeadBanner
            headerText={'Map'}
            isShowBackIcon
            onClickBack={() => this.props.navigation.goBack()}
          />
          <View>
            <ImageZoom
              cropWidth={Dimensions.get('window').width}
              cropHeight={Dimensions.get('window').height}
              imageWidth={Dimensions.get('window').width}
              imageHeight={Dimensions.get('window').height}
            >
              <ImageBackground style={{ width: '100%', height: '100%' }} source={realImg}>
                <Text style={{ marginTop: 400, marginLeft: 40 }}> h</Text>
              </ImageBackground>
            </ImageZoom>
          </View>
        </View>
      </View>
    );
  }
}

export default UserRoute;

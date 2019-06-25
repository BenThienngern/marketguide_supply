import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Iconed from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageZoom from 'react-native-image-pan-zoom';
import axios from 'axios';
import HeadBanner from '../../components/HeadBanner';

const realImg = require('../../resource/images/Real.png');

class UserRoute extends Component {
  componentWillMount() {
    this.getStoreFront();
    console.disableYellowBox = true;
  }

  async getStoreFront() {
    await axios
      .get('https://chiangmai.thaimarket.guide/shop?offset=0&limit=10')
      .then((response) => {
        this.setState(() => ({
          stores: response.data.data,
        }));
      });
  }
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
                <View>
                  <View>
                    {/* shop 3 */}
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('StoreFront', {
                          shopName: 'test1',
                        });
                      }}
                      style={[styles.store, { marginTop: 389, marginLeft: 37.5 }]}
                    >
                      <Icon name={'store'} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    {/* shop 1 */}
                    <TouchableOpacity
                      style={[styles.store, { marginTop: -32, marginLeft: 78 }]}
                    >
                      <Icon name={'store'} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    {/* shop 2 */}
                    <TouchableOpacity
                      style={[styles.store, { marginTop: 27.5, marginLeft: 131 }]}
                    >
                      <Icon name={'store'} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    {/* shop 4 */}
                    <TouchableOpacity
                      style={[styles.res, { marginTop: -156.5, marginLeft: 85 }]}
                    >
                      <Icon name={'restaurant'} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    {/* shop 5 */}
                    <TouchableOpacity
                      style={[styles.jew, { marginTop: -165, marginLeft: 195 }]}
                    >
                      <Icons name={'diamond'} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    {/* shop 9 */}
                    <TouchableOpacity
                      style={[styles.store, { marginTop: 10, marginLeft: 201.5 }]}
                    >
                      <Icon name={'store'} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    {/* shop 7 */}
                    <TouchableOpacity
                      style={[styles.store, { marginTop: -164, marginLeft: 282 }]}
                    >
                      <Icon name={'store'} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    {/* shop 8 */}
                    <TouchableOpacity
                      style={[styles.drink, { marginTop: -51, marginLeft: 238.3 }]}
                    >
                      <Iconed name={'coffee-outline'} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    {/* shop 9 */}
                    <TouchableOpacity
                      style={[styles.store, { marginTop: -253.5, marginLeft: 318.5 }]}
                    >
                      <Icon name={'store'} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    {/* shop 10 */}
                    <TouchableOpacity
                      style={[styles.service, { marginTop: -60, marginLeft: 281 }]}
                    >
                      <Iconed name={'room-service'} size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </ImageZoom>
          </View>
        </View>
      </View>
    );
  }
}

export default UserRoute;

const styles = {
  res: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 29,
    height: 29,
    backgroundColor: '#F6903E',
    borderRadius: 50,
  },
  store: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 29,
    height: 29,
    backgroundColor: '#851CAF',
    borderRadius: 50,
  },
  jew: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 29,
    height: 29,
    backgroundColor: '#32D1BE',
    borderRadius: 50,
  },
  drink: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 29,
    height: 29,
    backgroundColor: '#FFE219',
    borderRadius: 50,
  },
  service: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 29,
    height: 29,
    backgroundColor: '#98E765',
    borderRadius: 50,
  },
};

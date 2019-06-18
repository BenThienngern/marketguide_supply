import React from 'react';
import { View } from 'react-native';
import HeadBanner from '../../components/HeadBanner';
import StoreFront from '../../components/StoreFront';

const UserRoute = () => (
  <View>
    <View>
      <HeadBanner headerText={'Map'} />
    </View>
    <View>
      <StoreFront />
    </View>
  </View>
);

export default UserRoute;

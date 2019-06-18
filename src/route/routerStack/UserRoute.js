import React from 'react';
import { View } from 'react-native';
import HeadBanner from '../../components/HeadBanner';
import Auth from '../../../src/Auth';

const UserRoute = () => (
  <View style={{ flex: 1 }}>
    <View>
      <HeadBanner headerText={'Log In'} />
    </View>
    <Auth />
  </View>
);

export default UserRoute;

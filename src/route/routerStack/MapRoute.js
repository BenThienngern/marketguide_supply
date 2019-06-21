import React from 'react';
import { View } from 'react-native';
import HeadBanner from '../../components/HeadBanner';

const UserRoute = ({ navigation }) => (
  <View>
    <HeadBanner
      headerText={'Map'}
      isShowBackIcon
      onClickBack={() => navigation.goBack()}
    />
  </View>
);

export default UserRoute;

import React from 'react';
import { View } from 'react-native';
import StoreHead from './StoreHead';

const StoreFront = ({ navigation, shopName }) => (
  <View>
    <View>
      <StoreHead
        headerText={shopName}
        onClickBack={() => {
          navigation.goBack();
        }}
      />
    </View>
  </View>
);

export default StoreFront;

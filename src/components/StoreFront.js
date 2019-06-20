import React from 'react';
import { View } from 'react-native';
// import { FAB } from 'react-native-paper';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StoreHead from './StoreHead';
import NavTabs from './NavTabs';

const StoreFront = ({ navigation }) => {
  const shopName = navigation.getParam('shopName');
  return (
    <View>
      <View>
        <StoreHead
          headerText={shopName}
          onClickBack={() => {
            navigation.goBack();
          }}
        />
      </View>
      <NavTabs />
      {/* <View>
      <AirbnbRating />
    </View> */}
    </View>
  );
};

export default StoreFront;

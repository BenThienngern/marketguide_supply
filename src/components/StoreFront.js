import React from 'react';
import { View } from 'react-native';
// import { FAB } from 'react-native-paper';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StoreHead from './StoreHead';
import NavTabs from './NavTabs';

const StoreFront = ({ navigation }) => {
  const shopdata = navigation.getParam('storesData');
  return (
    <View>
      <View>
        <StoreHead
          headerText={shopdata.lang.en.name}
          onClickBack={() => {
            navigation.goBack();
          }}
        />
      </View>
      <NavTabs shopDetail={shopdata} />
      {/* <View>
      <AirbnbRating />
    </View> */}
    </View>
  );
};

export default StoreFront;

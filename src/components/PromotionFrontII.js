import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HeadBanner from './HeadBanner';

const ProIIFront = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <HeadBanner
      headerText="Promotion Details"
      isShowBackIcon
      onClickBack={() => {
        navigation.goBack();
      }}
    />
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri:
            'https://api.thaimarket.guide/images/service/download/5c2064fb70967d0001a9ba41?',
        }}
        style={styles.Image}
      />
    </View>
  </View>
);

export default ProIIFront;

const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: '60%',
  },
});

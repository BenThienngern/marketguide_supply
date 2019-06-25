import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import HeadBanner from './HeadBanner';

const ProIFront = ({ navigation }) => (
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
            'https://api.thaimarket.guide/images/service/download/5bfb6e138882f90001d19bd4?',
        }}
        style={styles.Image}
      />
      <Text>Free</Text>
    </View>
  </View>
);

export default ProIFront;

const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: '60%',
  },
});

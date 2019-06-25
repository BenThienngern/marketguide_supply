import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
      <ScrollView>
        <Image
          source={{
            uri:
              'https://api.thaimarket.guide/images/service/download/5c2064fb70967d0001a9ba41?',
          }}
          style={styles.Image}
        />
        <Text style={styles.Text}>Buy 3 Get 1 Free!!!</Text>
        <View style={{ flexDirection: 'row', flex: 1, marginTop: 16, marginLeft: 30 }}>
          <Icon name="md-stopwatch" size={20} color="#252525" />
          <Text style={{ margin: 4 }}>02 Feb - 19 Jun 2020</Text>
        </View>
        <Text style={styles.Detail}>
          For every purchase of 3 tea (include any tea that coast over 50฿) you will get 1
          free classic fresh bubble tea (this promotion is for cash only and cannot be use
          with other promotion)
        </Text>
      </ScrollView>
    </View>
  </View>
);

export default ProIIFront;

const styles = StyleSheet.create({
  Image: {
    width: 415,
    height: 445,
  },
  Text: {
    color: '#2C2C2C',
    fontSize: 24,
    marginLeft: 30,
    fontWeight: 'bold',
    marginTop: 24,
  },
  Detail: {
    fontSize: 18,
    marginTop: 16,
    color: '#6A6A6A',
    marginLeft: 30,
  },
});

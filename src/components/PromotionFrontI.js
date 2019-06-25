import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
      <ScrollView>
        <Image
          source={{
            uri:
              'https://api.thaimarket.guide/images/service/download/5bfb6e138882f90001d19bd4?',
          }}
          style={styles.Image}
        />
        <Text style={styles.Text}>Suit Discount</Text>
        <View style={{ flexDirection: 'row', flex: 1, marginTop: 16, marginLeft: 30 }}>
          <Icon name="md-stopwatch" size={20} color="#252525" />
          <Text style={{ margin: 4 }}>17 Jan - 17 Dec 2019</Text>
        </View>
        <Text style={styles.Detail}>
          Order a complete suits from the original prize of 4400฿ (2900+1500), we will
          immediately offer a discount of 500฿ (full suits for only 3900 ฿) and for
          dresses (originally coast 4900฿) we also offer a 500 bath discount (4400฿).
        </Text>
      </ScrollView>
    </View>
  </View>
);

export default ProIFront;

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

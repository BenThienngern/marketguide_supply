import React from 'react';
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native';

const PromotionCard = ({ text, url }) => (
  <TouchableOpacity>
    <View>
      <ImageBackground
        style={styles.CategorieImagePro}
        source={{
          uri: url,
        }}
      >
        <Text style={styles.PromoText}>{text}</Text>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

export default PromotionCard;
const styles = {
  CategorieImagePro: {
    flex: 1,
    margin: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    height: 180,
    width: 180,
  },
  PromoText: {
    fontSize: 16,
    color: 'white',
    backgroundColor: '#DF01D7',
    width: 85,
    fontWeight: 'bold',
  },
};

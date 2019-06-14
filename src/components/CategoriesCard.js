import React from 'react';
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native';

const CategoriesCard = ({ text, url }) => (
  <TouchableOpacity style={{ padding: 4 }}>
    <View>
      <ImageBackground
        style={styles.CategorieImageRest}
        source={{
          uri: url,
        }}
      >
        <Text style={styles.InnerText}>{text}</Text>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

export default CategoriesCard;
const styles = {
  CategorieImageRest: {
    flex: 1,
    // marginTop: -6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 180,
  },
  InnerText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
};

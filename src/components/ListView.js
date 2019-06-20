import React from 'react';
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native';

const ListView = ({ text, url, onClick }) => (
  <TouchableOpacity onPress={onClick}>
    <View style={{ margin: 4 }}>
      <ImageBackground
        style={[styles.CategorieImageRec]}
        source={{
          uri: url,
        }}
      >
        <Text style={styles.textOnRec}>{text}</Text>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

export default ListView;
const styles = {
  CategorieImageRec: {
    flex: 1,
    // marginTop: -6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 160,
  },
  textOnRec: {
    flex: 70,
    flexDirection: 'row',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    marginTop: 100,
  },
};

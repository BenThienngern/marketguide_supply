import React from 'react';
import { Text, ImageBackground, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PromotionCard = ({ url, text, dis, date }) => (
  <View style={styles.CardView}>
    <ImageBackground
      style={styles.CategorieImagePro}
      source={{
        uri: url,
      }}
    >
      <Text style={styles.PromoText}>Promotion</Text>
    </ImageBackground>
    <View style={styles.TextBox}>
      <View>
        <Text style={styles.Text}> {text}</Text>
        <Text style={styles.DisStyle}>{dis}</Text>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, margin: 4 }}>
        <Icon name="md-stopwatch" size={20} color="#252525" />
        <Text style={{ margin: 4, color: '#64646A' }}>{date}</Text>
      </View>
    </View>
  </View>
);

export default PromotionCard;
const styles = {
  CardView: {
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderColor: '#CDCDCD',
  },
  CategorieImagePro: {
    flex: 1,
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
  TextBox: {
    width: 180,
    height: 110,
    backgroundColor: 'white',
  },
  Text: {
    color: '#2C2C2C',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  DisStyle: {
    color: '#6A6A6A',
    fontWeight: 'bold',
    margin: 4,
  },
};

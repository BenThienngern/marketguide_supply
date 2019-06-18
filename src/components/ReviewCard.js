import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReviewCard = (props) => (
  <View style={{ flexDirection: 'row', flex: 1 }}>
    <View style={styles.containerStyle}>
      <Icon name={props.icon} size={22} style={styles.iconStyle} />
      <Text style={{ flex: 1 }}> 5.0</Text>
    </View>
    <View style={{ flex: 3, paddingLeft: 16 }}>
      <Icon name="thumbs-up" size={30} color="grey" />
    </View>
  </View>
);

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    borderBottomWidth: 1,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.4,
    // shadowRadius: 2,
    elevation: 1,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 5,
    height: 25,
    width: 45,
  },
  iconStyle: {
    flex: 1,
    color: 'grey',
  },
};

export default ReviewCard;

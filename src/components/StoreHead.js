import React from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';

const StoreHead = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View>
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
      <FAB
        icon="arrow-back"
        style={styles.fab}
        small
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#6C23C6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 30,
    Opacity: 0.1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: -10,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    Opacity: 0.7,
  },
};

export default StoreHead;

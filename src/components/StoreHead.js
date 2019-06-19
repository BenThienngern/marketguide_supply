import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { FAB } from 'react-native-paper';

const StoreHead = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View>
      <ImageBackground
        style={viewStyle}
        source={{
          uri:
            'https://api.thaimarket.guide/images/service/download/5c205bba70967d0001a9ba31',
        }}
      >
        <View>
          <Text style={textStyle}>{props.headerText}</Text>
        </View>
      </ImageBackground>
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

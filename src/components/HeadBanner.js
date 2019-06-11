import React from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View>
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
      <FAB
        style={styles.fab}
        small
        icon="search"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#A9DFBF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 22,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: -11,
  },
};

export default Header;

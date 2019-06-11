import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Title } from 'react-native-paper';
import { Card, CardSection, Button } from './common';

const AlbumDetail = ({ album }) => {
  const { image } = album;
  console.log(album);
  const {
    thumbnailContainerStyle,
    //  headerContentStyle,
    thumbnailStyle,
    headerTextStyle,
    //imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: image }} />
        </View>
        {/* <View style={headerContentStyle}> */}
        <Title style={headerTextStyle}>{album.lang.en.name}</Title>
        {/* </View> */}
        <View>
          <Text>{album.lang.en.description}</Text>
        </View>
      </CardSection>
      {/* <CardSection> */}
      {/* <Image style={imageStyle} source={{ uri: image }} /> */}
      {/* </CardSection> */}
      <CardSection>
        <View style={{ flex: 1 }}>
          <Button
            color="#D5D8DC"
            onPress={() => Linking.openURL()}
            textMessage="More Info"
          />
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
  },
  headerTextStyle: {
    fontSize: 18,
    marginLeft: 19,
  },
  thumbnailStyle: {
    height: 125,
    width: 125,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 600,
    flex: 1,
    width: 400,
  },
  buttonD: {
    flex: 1,
    color: '#000',
  },
  discriptionText: {
    fontSize: 10,
  },
};

export default AlbumDetail;

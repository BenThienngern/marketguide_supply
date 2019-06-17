import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReviewCard from './ReviewCard';
import { Card, CardSection } from './common';

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
    <TouchableOpacity>
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image style={thumbnailStyle} source={{ uri: image }} />
          </View>
          <View style={{ flex: 1, margin: 8 }}>
            <Title style={headerTextStyle}>{album.lang.en.name}</Title>
            <Text>{album.lang.en.description}</Text>
            <Icon ios="albums" size={30} color="#4F8EF7" />
            <View>
              <ReviewCard icon="star" />
            </View>
          </View>
          {/* <View style={{ flex: 1 }}>
            <Text>{album.lang.en.description}</Text>
          </View> */}
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
  },
  headerTextStyle: {
    fontSize: 18,

    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailStyle: {
    height: 140,
    width: 140,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 10,
    // marginRight: 10,
    padding: 2,
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

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class DetailApi extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentWillMount() {
    console.log('asdasd');
    this.callApi();
  }

  callApi = async () => {
    await axios
      .get('https://chiangmai.thaimarket.guide/shop?offset=0&limit=10')

      .then((response) => {
        console.log('data', response.data.data);
        this.setState((prev) => ({
          ...prev,
          albums: response.data.data,
        }));
      });
  };

  renderAlbums() {
    return this.state.albums.map((album) => (
      <AlbumDetail key={album.lang.en.name} album={album} />
    ));
  }

  render() {
    console.log('log data:', this.state.albums);
    console.log(this.state.albums, 'this.setState.albums');
    if (this.state.albums.length > 0) {
      return <ScrollView>{this.renderAlbums()}</ScrollView>;
    }
    return null;
  }
}

export default DetailApi;

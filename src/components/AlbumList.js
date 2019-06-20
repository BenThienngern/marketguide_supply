import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'props');
    this.state = { stores: [] };
  }

  componentWillMount() {
    this.callApi();
  }

  callApi = async () => {
    await axios
      .get('https://chiangmai.thaimarket.guide/shop?offset=0&limit=10')
      .then((response) => {
        this.setState((prev) => ({
          ...prev,
          stores: response.data.data,
        }));
      });
  };

  renderAlbums() {
    return this.state.stores.map((album) => (
      <AlbumDetail {...this.props} key={album.lang.en.name} album={album} />
    ));
  }

  render() {
    if (this.state.stores.length > 0) {
      return <ScrollView>{this.renderAlbums()}</ScrollView>;
    }
    return null;
  }
}

export default AlbumList;

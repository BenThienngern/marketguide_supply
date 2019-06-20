import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HeadBanner from '../../components/HeadBanner';
import Search from '../../components/Search';
import AlbumList from '../../components/AlbumList';

class ListRoute extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.ListBackground}>
          <View>
            <HeadBanner
              onClickBack={() => this.props.navigation.goBack()}
              isShowBackIcon
              headerText={'Store List'}
            />
          </View>
          <View style={styles.topbar}>
            <Search />
          </View>
          <AlbumList {...this.props} />
        </View>
      </View>
    );
  }
}

export default ListRoute;

const styles = StyleSheet.create({
  ListBackground: {
    flex: 1,
    backgroundColor: '#F0F9FF',
  },
});

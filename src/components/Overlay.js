import React, { Component } from 'react';
import { Text } from 'react-native';
import Overlays from 'react-native-modal-overlay';

export default class Overlay extends Component {
  state = {
    modalVisible: true,
  };

  onClose = () => this.setState({ modalVisible: false });

  render() {
    return (
      <Overlays
        visible={this.state.modalVisible}
        onClose={this.onClose}
        closeOnTouchOutside
      >
        <Text>Some Modal Content</Text>
      </Overlays>
    );
  }
}

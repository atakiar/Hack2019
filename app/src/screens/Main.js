import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import ActionButton from '../components/ActionButton';
import Camera from '../components/Camera';
import AccessibleText from '../components/AccessibleText';
import AccessibilityOptions from '../components/AccessibilityOptions';
import Theme from '../config/Theme';

const theme = new Theme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraActive: false,
      optionsActive: false,
      text: 'This is some text. I\'m so happy to see you here.',
      options: [],
    };
  }


  sendImage = () => {
    // capture the current image

    // make an http request

    // set this.state.text
  }

  toggleCamera = () => {
    // toggle the camera
  }

  toggleOptions = () => {
    this.setState((state) => ({
      optionsActive: !state.optionsActive,
    }));
  }

  render() {
    const {
      text, options, cameraActive, optionsActive,
    } = this.state;


    return (
      <SafeAreaView style={styles.container}>
        <Camera active={cameraActive} />
        <AccessibleText text={text} options={options} theme={theme} />
        <Modal
          isVisible={optionsActive}
          onSwipeComplete={() => this.setState({ optionsActive: false })}
          onBackdropPress={() => this.setState({ optionsActive: false })}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={styles.bottomModal}
        >
          <AccessibilityOptions theme={theme} />
        </Modal>

        <ActionButton text="Camera" index={1} onPress={this.toggleCamera} iconName="photo-camera" theme={theme} />
        <ActionButton text="Help" index={0} onPress={this.toggleOptions} iconName="accessibility" theme={theme} />
      </SafeAreaView>
    );
  }
}

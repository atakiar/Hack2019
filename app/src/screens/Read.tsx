import React, { Component } from 'react';
import {
  SafeAreaView, ScrollView, View, Text, Alert, Image, ImageStyle
} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import ListenButton from '../components/ListenButton';
import { sendImage } from '../services/api/api'
import * as Speech from 'expo-speech';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


export default class Main extends Component<{ navigation, screenProps }, { text: string, uri: string, imageLoaded: boolean, modalVisible: boolean, base64: string, isPlaying: boolean, hasPlayed: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      text: "With Lumen, you can read and listen to the documents and books that would otherwise be inaccessible.\n\nTouch 'Camera' to get started.",
      uri: '',
      base64: '',
      imageLoaded: false,
      modalVisible: false,
      isPlaying: false,
      hasPlayed: false,
    };
  }

  toggleSpeaking = () => {

    if (this.state.isPlaying) {
      Speech.pause();
    } else {
      if (this.state.hasPlayed) {
        Speech.resume();
      } else {
        Speech.speak(this.state.text);
      }
    }

    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying, hasPlayed: true
    }))
  }

  sendImage = async () => {
    // make an http request
    const result = await sendImage(this.state.uri, this.state.base64);

    const { text } = result;

    // store the text
    this.setState({ text, modalVisible: false })
  }

  pickImage = async () => {
    let status = Permissions.PermissionStatus.UNDETERMINED;
    try {
      const result = await Permissions.getAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);

      status = result.status;

    } catch (error) {
      console.log(error);
    }

    if (status === Permissions.PermissionStatus.UNDETERMINED) {
      console.log('Asking for permissions.');

      const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);

      status = result.status;
    }

    if (status === Permissions.PermissionStatus.DENIED) {
      Alert.alert('Sorry, we need camera roll permissions to make this work!')
    }


    const image = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, allowsEditing: true, base64: true });

    if (!image.cancelled) {
      this.setState({ uri: image.uri, base64: image.base64, imageLoaded: true, modalVisible: true, });
    }
  }

  render() {
    const {
      text,
    } = this.state;

    const { navigation, screenProps } = this.props;
    const { theme } = screenProps;

    const styles = {
      container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
      },
      text: {
        color: theme.text,
        fontSize: theme.fontSize,
        lineHeight: theme.lineHeight,
        fontFamily: theme.fontFamily,
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Button
            raised
            title="Camera"
            containerStyle={{ margin: 12 }}
            buttonStyle={{ backgroundColor: theme.primary }}
            onPress={this.pickImage}
          />
          <Button
            raised
            title="Options"
            buttonStyle={{ backgroundColor: theme.primary }}
            containerStyle={{ margin: 12 }}
            onPress={() => navigation.navigate('Settings')}
          />
          <Text style={[styles.text, { margin: 15 }]}>{text}</Text>
          <Image
            style={{
              width: 100,
              height: 250,
              aspectRatio: 1,
              position: 'relative',
              top: theme.lineHeight,
              left: theme.lineHeight
            }}
            resizeMode="contain"
            source={require('../../assets/images/computer.png')}
          />
        </ScrollView>
        <Modal
          isVisible={this.state.imageLoaded && this.state.modalVisible}
          onSwipeComplete={() => this.setState({ modalVisible: false })}
          swipeDirection={['left', 'right', 'down', 'up']}
          style={{ justifyContent: 'flex-end', margin: 0 }}
          onBackdropPress={() => this.setState({ modalVisible: false })}
        >
          <View style={{ alignItems: 'center', backgroundColor: theme.backgroundColor, justifyContent: 'flex-end', padding: theme.lineHeight, borderTopEndRadius: 30, borderTopStartRadius: 30 }}>
            <Image
              style={{
                width: '100%',
                // height: undefined,
                aspectRatio: 1,
                marginBottom: theme.lineHeight / 2,
              }}
              resizeMode="contain"
              source={{ uri: this.state.uri }}
            />
            <Button
              title="Scan"
              titleStyle={[styles.text, { color: theme.primaryText }]}
              onPress={this.sendImage}
              buttonStyle={{ backgroundColor: theme.primary }}
              containerStyle={{ width: '100%', marginBottom: theme.lineHeight / 2 }}
            />
            <Button
              title="Cancel"
              titleStyle={[styles.text, { color: theme.primaryText, }]}
              buttonStyle={{ backgroundColor: theme.danger }}
              onPress={() => this.setState({ modalVisible: false })}
              containerStyle={{ width: '100%', marginBottom: theme.lineHeight / 2 }}
            />
          </View>
        </Modal>
        <ListenButton theme={theme} onPress={this.toggleSpeaking} isPlaying={this.state.isPlaying} />
      </SafeAreaView >
    );
  }
}

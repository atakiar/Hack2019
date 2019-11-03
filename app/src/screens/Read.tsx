import React, { Component } from 'react';
import {
  StyleSheet, SafeAreaView, ScrollView, View, Text, Alert, Image
} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Modal from 'react-native-modal';
import ActionButton from '../components/ActionButton';
import * as Speech from 'expo-speech';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


export default class Main extends Component<{ navigation, screenProps }, { text: string, uri: string, imageLoaded: boolean, modalVisible: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      text: "you stone ages, carbon dioxide breathing, primordial, brick munching Troglodyte.",
      uri: '',
      imageLoaded: false,
      modalVisible: false,
    };
  }

  sendImage = () => {
    // make an http request

    // set this.state.text

  }

  pickImage = async () => {
    let status = Permissions.PermissionStatus.UNDETERMINED;
    try {
      const result = await Permissions.getAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);

      status = result.status;

      console.log(status);

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


    const image = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, allowsEditing: true });

    if (!image.cancelled) {
      this.setState({ uri: image.uri, imageLoaded: true, modalVisible: true, });
    }
  }

  sayText = () => {
    Speech.speak(this.state.text)
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

        margin: 15,
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Button
            title="Camera"
            type="clear"
            onPress={this.pickImage}
          />
          <Button
            raised
            title="Settings"
            icon={{
              name: 'accessibility',
              size: 15,
              color: 'white',
              type: 'material',
            }}
            iconRight
            onPress={() => navigation.navigate('Settings')}
          />
          <Text style={styles.text}>{text}</Text>
        </ScrollView>
        <Modal
          isVisible={this.state.imageLoaded && this.state.modalVisible}
          onSwipeComplete={() => this.setState({ modalVisible: false })}
          swipeDirection={['left', 'right', 'down', 'up']}
          style={{ justifyContent: 'flex-end', marginLeft: 10, marginRight: 10, marginBottom: 0 }}
          onBackdropPress={() => this.setState({ modalVisible: false })}
        >
          <View style={{ margin: 0, alignItems: 'center', backgroundColor: 'white', padding: 36, borderTopEndRadius: 30, borderTopStartRadius: 30 }}>
            <Image
              style={{
                width: 360,
                height: 360,
                alignSelf: 'center'
              }}
              resizeMode="contain"
              source={{ uri: this.state.uri }}
            />
            <View style={{ flexDirection: 'row', width: 350, marginTop: 12 }}>
              <Button
                title="Cancel"
                onPress={() => this.setState({ modalVisible: false })}
                containerStyle={{ flex: 1 }}
              />
              <Button
                title="Scan"
                onPress={this.sendImage}
                containerStyle={{ flex: 1, marginLeft: 12 }}
              />
            </View>
          </View>
        </Modal>
        <ActionButton text="Read Aloud" theme={theme} onPress={this.sayText} />
      </SafeAreaView>
    );
  }
}

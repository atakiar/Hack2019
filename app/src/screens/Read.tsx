import React, { Component } from 'react';
import {
  StyleSheet, SafeAreaView, ScrollView, View, Text,
} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import ActionButton from '../components/ActionButton';
import * as Speech from 'expo-speech';


export default class Main extends Component<{ navigation, screenProps }, { text: string }> {
  constructor(props) {
    super(props);
    this.state = {
      text: "you stone ages, carbon dioxide breathing, primordial, brick munching Troglodyte.",
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
        fontFamily: theme.fontFamily,
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Button
            title="Camera"
            type="clear"
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

        <ActionButton text="Read Aloud" theme={theme} onPress={this.sayText} />
      </SafeAreaView>
    );
  }
}

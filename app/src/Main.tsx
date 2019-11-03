import React, { Component } from 'react';
import Navigator from './Navigator';
import Theme from './config/Theme';
import * as Font from 'expo-font';

const theme = new Theme();

export default class Main extends Component<{}, { fontLoaded: boolean }> {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    theme.update = () => this.forceUpdate();
    await Font.loadAsync({
      'open-dyslexic-bold': require('../assets/fonts/OpenDyslexic3-Bold.ttf'),
      'open-dyslexic': require('../assets/fonts/OpenDyslexic3-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    console.log(fontLoaded)
    return fontLoaded ? <Navigator screenProps={{ theme }} /> : null;
  }
}

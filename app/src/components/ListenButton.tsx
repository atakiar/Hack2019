import React, { Component } from 'react'
import ActionButton from './ActionButton'
import Theme from '../config/Theme';

export default class ListenButton extends Component<{ isPlaying: boolean, theme: Theme, onPress: () => void }, { hasPlayed: boolean }> {
  constructor(props) {
    super(props)

    this.state = { hasPlayed: false }
  }

  render() {
    const { isPlaying, onPress, theme } = this.props;
    const { hasPlayed } = this.state;

    const iconName = hasPlayed ? isPlaying ? 'pause-circle-outline' : 'play-circle-outline' : 'hearing';

    return <ActionButton text="Listen" iconName={iconName} theme={theme} onPress={() => {
      this.setState({ hasPlayed: true })
      onPress();
    }} />
  }
}
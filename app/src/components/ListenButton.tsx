import React, { Component } from 'react'
import ActionButton from './ActionButton'

export default class ListenButton extends Component<{ isPlaying: boolean }, {}> {
  constructor(props) {
    super(props)

    this.state = { hasPlayed: false }
  }

  render() {
    const { isPlaying } = this.props;

    const iconName = isPlaying ? 'play-circle-outline' : 'pause'

    return <ActionButton />
  }
}
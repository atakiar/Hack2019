import React, { Component } from 'react';
import Navigator from './Navigator';
import Theme from './config/Theme';

const theme = new Theme();

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    theme.update = () => this.forceUpdate();
  }

  render() {
    return <Navigator screenProps={{ theme }} />;
  }
}

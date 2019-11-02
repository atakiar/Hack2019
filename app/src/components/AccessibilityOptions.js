import React, { Component } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Option from './Option';
import Theme, { themes } from '../config/Theme';


const styles = StyleSheet.create({
  container: {


  },

});


export default class AccessibilityOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const { theme } = this.props;
    return (
      <View style={styles.container}>
        {Object.values(themes).map((t, i) => (
          <Option
            info={t}
            key={i}
            onPress={() => {
              theme.add(t);
              this.forceUpdate();
            }}
            theme={theme}
          />
        ))}
      </View>
    );
  }
}

AccessibilityOptions.propTypes = {
  theme: PropTypes.instanceOf(Theme).isRequired,
};

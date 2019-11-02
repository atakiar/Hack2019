import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Theme from '../config/Theme';

const AccessibleText = ({ text, theme }) => {
  const styles = {
    container: {
      margin: 25,
      backgroundColor: theme.backgroundColor,
    },
    text: {
      color: theme.color,
    },
  };
  return (<View style={styles.container}><Text style={styles.color}>{text}</Text></View>);
};
AccessibleText.defaultProps = {

};

AccessibleText.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.instanceOf(Theme).isRequired,
};

export default AccessibleText;

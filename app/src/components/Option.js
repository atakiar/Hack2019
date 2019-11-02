import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Theme from '../config/Theme';


const Option = ({ info, onPress, theme }) => {
  const { name } = info;

  const styles = {
    container: {
      backgroundColor: theme.primary,
    },
    text: {
      margin: 18,
      fontSize: 24,
      color: theme.text,
    },
  };


  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

Option.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  theme: PropTypes.instanceOf(Theme).isRequired,
};

export default Option;

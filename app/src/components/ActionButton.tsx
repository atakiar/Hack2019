import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, TextProps, ViewProps
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Theme from '../config/Theme';
import depth from '../config/depth';
import { } from 'react-native-elements';

const size = 100;
const margin = 20;
const iconSize = 40;


const ActionButton = ({
  text, index, onPress, iconName, theme,
}) => {
  const rightDistance = margin + index * (margin + size);

  const styles = {
    container: {
      width: size,
      height: size,
      backgroundColor: theme.primary,
      position: 'absolute',
      right: margin,
      bottom: margin,
      borderRadius: size / 2,
      alignContent: 'center',
      justifyContent: 'center',
      ...depth(1),
    } as ViewProps,

    text: {
      textAlign: 'center',

      color: theme.text,
      fontSize: theme.fontSize,
      lineHeight: theme.lineHeight,
      fontFamily: theme.fontFamily,

    } as TextProps,
  };

  const icon = iconName ? <MaterialIcons name={iconName} size={iconSize} color={theme.text} style={{ textAlign: 'center' }
  } /> : null

  return (

    <TouchableOpacity
      style={[styles.container, { right: rightDistance }]}
      onPress={onPress}
    >
      <View>{icon}</View>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
};

ActionButton.defaultProps = {
  index: 0,
  iconName: '',
};

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  theme: PropTypes.instanceOf(Theme).isRequired,
};


export default ActionButton;

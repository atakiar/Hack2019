import React from 'react';
import { View, Text } from 'react-native';
import Theme from '../config/Theme';

interface Props {
  title: string,
  theme: Theme
}

const Header = (props: Props) => {
  const { title, theme } = props;

  return <View style={{ margin: 15 }}>
    <Text style={{ fontSize: theme.fontSize * 2, fontWeight: 'bold', borderBottomWidth: 1, borderColor: 'black' }}>{title}</Text>
  </View>
};

export default Header;

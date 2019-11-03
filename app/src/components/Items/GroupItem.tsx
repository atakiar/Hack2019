import React, { Component } from 'react';
import {
  SafeAreaView, ScrollView, Text, SectionList, View, Switch, ViewProps,
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Theme, { groups, Group } from '../../config/Theme';

interface Props {
  theme: Theme,
  toggleGroup: (groupName: string) => void,
  group: Group,
  active: boolean,
};

const GroupItem = (props: Props) => {
  const { theme, group, toggleGroup, active } = props

  const styles = {
    item: {
      margin: 10,
      flexDirection: 'row',
      alignContent: 'center',
      flex: 1,
    } as ViewProps,
    text: {
      fontSize: theme.fontSize,
      flex: 1,
      marginTop: 3,
      marginLeft: 12,
      marginRight: 12,
      color: theme.text
    },
  }

  return (
    <View style={styles.item}>
      <Text style={styles.text}>{group.title}</Text>
      <Switch
        onValueChange={() => toggleGroup(group.name)}
        value={active}
      />
    </View>
  );
}

export default GroupItem
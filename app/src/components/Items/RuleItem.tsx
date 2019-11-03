import React, { Component } from 'react';
import {
  SafeAreaView, ScrollView, Text, SectionList, View, Switch, ViewProps,
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Theme, { groups, Rule } from '../../config/Theme';

interface Props {
  theme: Theme,
  toggleRule: (ruleName: string, groupName: string) => void,
  rule: Rule,
  active: boolean,
  groupName: string
};

const RuleItem = (props: Props) => {
  const { theme, rule, toggleRule, active, groupName } = props;

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
      marginLeft: 36,
      marginRight: 12,
      color: theme.text
    },
  }

  return (
    <View style={styles.item}>
      <Text style={styles.text}>{rule.title}</Text>
      <Switch
        onValueChange={() => toggleRule(rule.name, groupName)}
        value={active}
      />
    </View>
  );
}

export default RuleItem;
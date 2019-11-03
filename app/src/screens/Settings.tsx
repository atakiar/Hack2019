import React, { Component } from 'react';
import {
  SafeAreaView, ScrollView, Text, SectionList, View, Switch, ViewProps,
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Theme, { groups, Group, Rule } from '../config/Theme';
import RuleItem from './../components/Items/RuleItem'
import GroupItem from './../components/Items/GroupItem'
import Header from '../components/Header';


const makeButtonData = (theme: Theme): { title: { group: Group, active: boolean }, data: { rule: Rule, active: boolean }[] }[] => {
  const data = groups.map((group) => ({
    title: { group, active: theme.isActive(group) },
    data: group.rules
      .filter((rule) => !!(rule.title))
      .map((rule) => {
        return { rule, active: theme.isRuleActive(rule, group) }
      }),
  }));

  return data;
};

class Settings extends React.Component<{ screenProps: { theme: Theme } }, { active: string[] }> {
  theme: Theme;

  constructor(props) {
    super(props);

    this.theme = props.screenProps.theme
  }

  toggleGroup = (groupName: string) => {
    this.theme.toggleGroup(groupName)
  }

  toggleRule = (ruleName: string, groupName: string) => {
    this.theme.toggleRule(ruleName, groupName)
  }

  render() {
    const { screenProps } = this.props;
    const { theme } = screenProps;


    const styles = {
      container: { flex: 1, backgroundColor: theme.backgroundColor },

    };

    const data = makeButtonData(theme);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header title="Settings" theme={theme} />
          <SectionList
            sections={data}
            keyExtractor={(item, index) => item + index}

            renderItem={({ item, section }) => {
              return <RuleItem rule={item.rule} theme={theme} toggleRule={this.toggleRule} active={item.active} groupName={section.title.group.name} />
            }}

            renderSectionHeader={({ section: { title } }) => <GroupItem group={title.group} theme={theme} toggleGroup={this.toggleGroup} active={title.active} />}
          />

        </ScrollView>
      </SafeAreaView>
    );
  }
}




export default Settings;

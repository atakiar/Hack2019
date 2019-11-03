export interface Rule {
  name: string
  title?: string,
  value: string | number,
};

export interface Group {
  name: string,
  title: string,
  rules: Rule[]
}

const standard: Group = {
  name: 'standard',
  title: 'Standard',
  rules: [
    { name: 'text', title: 'Text Color', value: '#000000' },
    { name: 'primary', value: 'rgb(54, 23, 107)' },
    { name: 'primaryText', value: 'rgb(255, 255, 255)' },
    { name: 'accent', value: 'rgb(236, 70, 53)' },
    { name: 'backgroundColor', title: 'Text Color', value: '#ffffff' },
    { name: 'accent', value: '#cccccc' },
    { name: 'fontSize', title: 'Font Size', value: 18 },
    { name: 'lineHeight', title: 'Line Height', value: 35 },
    { name: 'fontFamily', title: 'Font', value: 'System' },
    { name: 'danger', value: 'rgb(236, 70, 53)' }
  ]
};

const dark: Group = {
  title: 'Night Mode',
  name: 'dark',
  rules: [
    { name: 'text', title: 'Text Color', value: '#ffffff' },
    { name: 'primary', value: 'rgb(236, 70, 53)' },
    { name: 'primaryText', value: 'rgb(255, 255, 255)' },
    { name: 'backgroundColor', title: 'Background Color', value: 'rgb(30, 42, 53)' },
  ]
}

const dyslexia: Group = {
  title: 'Dyslexia',
  name: 'dyslexia',
  rules: [
    { name: 'backgroundColor', value: '#ffff00', title: 'Background Color' },
    { name: 'lineHeight', value: 40, title: 'Line Height' },
    { name: 'fontFamily', value: 'open-dyslexic', title: 'Font' }
  ]
};

const blueLight: Group = {
  name: 'blueLight',
  title: 'Blue Light',
  rules: [
    { name: 'backgroundColor', value: 'rgb(255, 238, 204)', title: 'Background Color' },
    { name: 'text', value: 'rgb(64, 31, 8)', title: 'Text Color' },
    { name: 'primary', value: 'rgb(192, 57, 43)' }
  ]
};

const largeText: Group = {
  title: 'Large Text',
  name: 'largeText',
  rules: [
    { name: 'fontSize', value: 48, title: 'Font Size' },
    { name: 'lineHeight', value: 70, title: 'Line Height' }
  ]
};

const groups = [dark, dyslexia, blueLight, largeText];

class Theme {

  update: () => void;

  // styles
  backgroundColor: string;

  fontSize: number;

  fontFamily: 'string';

  text: string;

  lineHeight: number;

  constructor() {
    standard.rules.forEach((rule) => {
      this[rule.name] = rule.value;
    });
  }

  setUpdate(func: () => void) {
    this.update = func;
  }


  toggleGroup(groupName: string) {

    const group = groups.find(g => g.name === groupName);

    if (!group) {
      return;
    }


    if (this.isActive(group)) {
      group.rules.forEach((rule) => {
        const stardardRule = standard.rules.find(r => r.name === rule.name)

        if (stardardRule) {
          this[rule.name] = stardardRule.value;
        }

      });
    } else {
      group.rules.forEach((rule) => {
        this[rule.name] = rule.value;
      });
    }

    this.update();
  }

  toggleRule(ruleName: string, groupName: string) {
    // find the group 
    const group = groups.find(g => g.name === groupName);

    if (!group) {
      return;
    }

    // find the rule in the group
    const rule = group.rules.find(r => r.name === ruleName);

    if (!rule) {
      return;
    }


    if (this[rule.name] === rule.value) {
      // turn the rule to standard
      const standardRule = standard.rules.find(r => r.name === rule.name);

      if (standardRule) {
        this[rule.name] = standardRule.value;
      }
    } else {
      // turn the rule to the group rule vale
      this[rule.name] = rule.value;
    }

    this.update();
  }

  isActive(group: Group): boolean {
    let active = true;
    group.rules.forEach(rule => {
      if (this[rule.name] !== rule.value) {
        active = false;
      }
    })

    return active;
  }

  isRuleActive(rule: Rule, group: Group): boolean {
    let active = false;
    group.rules.forEach(r => {
      if (r.name === rule.name && this[rule.name] === rule.value) {
        active = true;
      }
    })

    return active
  }
}

export default Theme;

export { groups };

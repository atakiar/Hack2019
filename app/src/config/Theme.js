
const standard = {
  text: 'white',
  primary: '#673ab7',
  primaryAccent: '#9a67ea',
  backgroundColor: 'rgb(255, 255, 255)',
};

const dark = {
  name: 'Night Mode',
  style: {
    text: 'black',
    primary: 'blue',
    primaryAccent: 'lightblue',
    backgroundColor: 'rgb(30, 42, 53)',
  },
};

const dyslexia = {
  name: 'Dyslexia',
  style: { backgroundColor: 'rgb(255, 255, 0)' },
};

const blueLight = {
  name: 'Blue Light', style: {},
};

const largeText = {
  name: 'Large Text',
  style: {},
};

const readAloud = {
  name: 'Read Aloud',
  style: {},
};

const options = {
  dark, dyslexia, blueLight, largeText, readAloud,
};


class Theme {
  constructor() {
    Object.keys(standard).forEach((property) => {
      this[property] = standard[property];
    });

    this.themes = [standard];
  }


  add(theme) {
    let newTheme = theme;

    if (typeof theme === 'string') {
      newTheme = options[theme];
    }

    this.themes.push(newTheme);

    Object.keys(newTheme.style).forEach((property) => {
      const value = newTheme.style[property];

      if (value) {
        this[property] = value;
      }
    });
  }
}

export default Theme;

export { options as themes };

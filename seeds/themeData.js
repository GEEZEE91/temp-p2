const { Theme } = require('../models');

const themedata = [
  {
    theme_description: 'costume'
  },
  {
    theme_description: 'birthday'
  },
  {
    theme_description: 'sports'
  },
  {
    theme_description: 'fancy cocktails'
  },
  {
    theme_description: 'dinner'
  }
];

// create function seedTheme and then export it
const seedTheme = () => Theme.bulkCreate(themedata);

module.exports = seedTheme;
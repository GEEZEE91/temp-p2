const { Theme } = require('../models');

const themedata = [
  {
    theme_description: 'costume party'
  },
  {
    theme_description: 'birthday party'
  },
  {
    theme_description: 'sports event'
  },
  {
    theme_description: 'cocktail party'
  },
  {
    theme_description: 'dinner party'
  },
  {
    theme_description: 'christmas party'
  },
  {
    theme_description: 'australia day'
  },
  {
    theme_description: '2023 nye'
  }
];

// create function seedTheme and then export it
const seedTheme = () => Theme.bulkCreate(themedata);

module.exports = seedTheme;
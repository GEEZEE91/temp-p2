const sequelize = require('../config/connection');
const seedTheme = require('./themeData');
const seedParty = require('./partyData');
const seedUser = require('./userData');

// create function to seed user, party, and theme tables
// all at once
const seedAll = async () => {
  // automatically sync all models at once with the database
  // with sequelize.sync, force: true drops the table if it
  // already exists
  await sequelize.sync({ force: true });
  await seedTheme();
  await seedUser();
  await seedParty();
  process.exit(0);
};

seedAll();

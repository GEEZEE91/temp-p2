const { User } = require('../models');

const userdata = [
  {
    firstname: 'Ash',
    lastname: 'Smith',
    email: 'ash@gmail.com',
    age: 40,
    address: '13 West Coast Drive, Trigg, WA 6019'
  },
  {
    firstname: 'Gina',
    lastname: 'Anderson',
    email: 'gina@gmail.com',
    age: 24,
    address: '11 Parade Drive, Dalkeith WA 6090'
  },
  {
    firstname: 'Zubair',
    lastname: 'Thagreat',
    email: 'zub@gmail.com',
    age: 34,
    address: '23 Forest Road, Peppermint Grove WA 6990'
  },
  {
    firstname: 'Sally',
    lastname: 'Smith',
    email: 'sally@gmail.com',
    age: 34,
    address: '22 Neverland Street, Perth WA 6000'
  }
];

// create function seedUser and then export it
const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;

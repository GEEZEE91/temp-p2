const { User } = require('../models');

const userdata = [
  {
    firstname: 'James',
    lastname: 'Compagnoni',
    email: 'james@aol.com',
    age: 34,
    address: '1320 South Dixie Highway, Coral Gables, FL 33146'
  },
  {
    firstname: 'Ashok',
    lastname: 'Nayakii',
    email: 'ashok.nayakii@gmail.com',
    age: 34,
    address: '11011 SW 104th St, Miami, FL 33176'
  },
  {
    firstname: 'Camilo',
    lastname: 'Restrepo',
    email: 'crest020@fiu.edu',
    age: 34,
    address: '777 Glades Rd, Boca Raton, FL 33431'
  },
  {
    firstname: 'Asha',
    lastname: 'Dorsey',
    email: 'ashadorsey@gmail.com',
    age: 34,
    address: '300 NE 2nd Ave, Miami, FL 33132'
  }
];

// create function seedUser and then export it
const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;

const { Party } = require('../models');

const partydata = [
  {
    startdate: '2022-04-10',
    title:'Tailgate 4everrr',
    ispublic: true,
    isover18: true,
    user_id: 1,
    theme_id: 3
  },
  {
    startdate: '2022-05-23',
    title: 'Bring your black tie!',
    ispublic: false,
    isover18: true,
    user_id: 4,
    theme_id: 5
  },
  {
    startdate: '2022-04-18',
    title: 'Lets get fancy!!!',
    ispublic: false,
    isover18: true,
    user_id: 1,
    theme_id: 4
  },
  {
    startdate: '2022-04-23',
    title: 'Another tailgate party?!',
    ispublic: true,
    isover18: true,
    user_id: 4,
    theme_id: 3
  },
  {
    startdate: '2022-05-29',
    title: 'Potluck dinner!',
    ispublic: true,
    isover18: true,
    user_id: 3,
    theme_id: 5
  },
  {
    startdate: '2022-05-21',
    title: 'Fancy cocktails, cause why not',
    ispublic: true,
    isover18: true,
    user_id: 1,
    theme_id: 4
  },
  {
    startdate: '2022-05-20',
    title: 'Good ol kegger. BYOB!',
    ispublic: true,
    isover18: true,
    user_id: 1,
    theme_id: 2
  },
  {
    startdate: '2022-10-31',
    title: 'Costume PAR-TAY',
    ispublic: false,
    isover18: true,
    user_id: 1,
    theme_id: 1
  },
  {
    startdate: '2022-05-20',
    title: 'My first keg!',
    ispublic: true,
    isover18: true,
    user_id: 1,
    theme_id: 2
  },
  {
    startdate: '2022-10-31',
    title: 'Marvel vs DC costume party',
    ispublic: false,
    isover18: true,
    user_id: 2,
    theme_id: 1
  },
];

// create function seedParty and then export it
const seedParty = () => Party.bulkCreate(partydata);

module.exports = seedParty;
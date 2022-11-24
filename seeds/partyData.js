const { Party } = require('../models');

const partydata = [
  {
    startdate: '2023-11-30',
    title:'Pre-xmas Party!!',
    ispublic: true,
    isover18: true,
    user_id: 1,
    theme_id: 3
  },
  {
    startdate: '2023-12-12',
    title: 'Xmas dinner at mine, BYO drinks!',
    ispublic: false,
    isover18: true,
    user_id: 4,
    theme_id: 5
  },
  {
    startdate: '2022-12-13',
    title: 'Free cocktails for the first hour!!!',
    ispublic: false,
    isover18: true,
    user_id: 1,
    theme_id: 4
  },
  {
    startdate: '2022-12-24',
    title: 'Fight Night!!',
    ispublic: true,
    isover18: true,
    user_id: 4,
    theme_id: 3
  },
  {
    startdate: '2022-12-16',
    title: 'Meet your Neighbours BBQ!',
    ispublic: true,
    isover18: true,
    user_id: 3,
    theme_id: 5
  },
  {
    startdate: '2022-12-31',
    title: 'NYE Cocktail Party!',
    ispublic: true,
    isover18: true,
    user_id: 1,
    theme_id: 4
  },
  {
    startdate: '2022-12-15',
    title: 'Turning 100!',
    ispublic: true,
    isover18: true,
    user_id: 1,
    theme_id: 2
  },
  {
    startdate: '2022-10-30',
    title: 'Halloweeeeeen Party!',
    ispublic: false,
    isover18: true,
    user_id: 1,
    theme_id: 1
  },
  {
    startdate: '2022-11-15',
    title: 'Sweet 16! (+40)',
    ispublic: false,
    isover18: true,
    user_id: 1,
    theme_id: 2
  },
  {
    startdate: '2022-12-26',
    title: 'Boxing Day Dress Up!',
    ispublic: true,
    isover18: true,
    user_id: 2,
    theme_id: 1
  },
];

// create function seedParty and then export it
const seedParty = () => Party.bulkCreate(partydata);

module.exports = seedParty;
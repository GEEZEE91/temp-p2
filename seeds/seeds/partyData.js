const { Party } = require('../models');

const partydata = [
  {
    startdate: '2022-12-31',
    title:'NYE Party!! Hello 2023!!',
    ispublic: true,
    isover18: true,
    user_id: 1,
    theme_id: 8
  },
  {
    startdate: '2023-12-12',
    title: 'Xmas dinner at mine, BYO drinks!',
    ispublic: true,
    isover18: true,
    user_id: 4,
    theme_id: 6
  },
  {
    startdate: '2022-12-13',
    title: 'Free cocktails for the first hour!!!',
    ispublic: true,
    isover18: true,
    user_id: 1,
    theme_id: 4
  },
  {
    startdate: '2022-02-24',
    title: 'UFC Fight Night!!',
    ispublic: true,
    isover18: true,
    user_id: 4,
    theme_id: 3
  },
  {
    startdate: '2022-12-16',
    title: 'Meet your Neighbors BBQ!',
    ispublic: true,
    isover18: true,
    user_id: 3,
    theme_id: 5
  },
  {
    startdate: '2023-01-13',
    title: 'Cocktail Tasting Party',
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
    startdate: '2023-10-30',
    title: 'Halloweeeeeen Party!',
    ispublic: true,
    isover18: true,
    user_id: 1,
    theme_id: 1
  },
  {
    startdate: '2022-11-30',
    title: 'Sweet 16! (+40)',
    ispublic: true,
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
    theme_id: 6
  },
  {
    startdate: '2022-12-20',
    title: 'Meet Santa! Xmas Party!',
    ispublic: true,
    isover18: false,
    user_id: 3,
    theme_id: 6
  },
  {
    startdate: '2023-01-26',
    title: 'Australia Day BBQ',
    ispublic: true,
    isover18: false,
    user_id: 2,
    theme_id: 7
  },
];

// create function seedParty and then export it
const seedParty = () => Party.bulkCreate(partydata);

module.exports = seedParty;
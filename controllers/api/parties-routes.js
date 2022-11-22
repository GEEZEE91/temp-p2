const router = require('express').Router();
const { Party, Theme, User } = require('../../models');
// Import the custom middleware
const withAuth = require('../../utils/auth');

// GET /api/parties i.e. get all parties
router.get('/', async (req, res) => {
    // Access our Party model and run .findAll() method
    Party.findAll({
      include: [
        {
          model: Theme,
          attributes: ['id', 'theme_description']
        }
      ]
    })
    .then(dbPartyData => res.json(dbPartyData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/parties/1 i.e. get single party
router.get('/:id', async (req, res) => {
  try {
    const dbPartyData = await Party.findByPk(req.params.id);
    // console.log(dbPartyData);
    const party = dbPartyData.get({ plain: true });
    // res.json(party);
    res.render('party', { party, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST /api/parties i.e. create a new party
router.post('/', (req, res) => {
    Party.create({
      title: req.body.title, 
      startdate: req.body.startdate,
      ispublic: req.body.ispublic,
      isover18: req.body.isover18,
      user_id: req.session.user_id,
      theme_id: req.body.theme_id
    })
    .then(dbPartyData => {
      console.log('dbPartyData is as follows', dbPartyData);
      res.json({ message: 'Party created successfully!', dbPartyData });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT /api/parties/1
router.put('/:id', (req, res) => {
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    // This .update() method combines the parameters for creating data and looking up data.
    // We pass in req.body to provide the new data we want to use in the update and req.params.id
    // to indicate where exactly we want that new data to be stored.
    Party.update(req.params, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json({ message: 'User updated successfully.' });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/parties/1
router.delete('/:id', (req, res) => {
    Party.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbPartyData => {
        if (!dbPartyData) {
          res.status(404).json({ message: 'No party found with this id' });
          return;
        }
        res.json(`Party deleted successfully.`);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;


router.post('/search', async (req, res) => {
  console.log('**************** inside parties-routes/search ***************');
  // Access our Party model and run .findAll() method
  // with conditions as shown below
  try {
    const dbPartyData = await Party.findAll({
      where: {
        ispublic: req.params.ispublic,
        isover18: req.params.isover18,
        theme_id: req.params.theme_id
      },
      include: [
        {
          model: Theme,
          attributes: ['id', 'theme_description']
        },
        {
          model: User,
          attributes: ['id', 'firstname', 'lastname', 'email']
        }
      ]
    });
    // console.log(dbPartyData[0]);

    const partySearchResults = dbPartyData.map(result => result.get({ plain: true}));
    // console.log(partySearchResults);
    // res.json(partySearchResults)
    res.render('searchResults', { partySearchResults, loggedIn: req.session.loggedIn });
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }});

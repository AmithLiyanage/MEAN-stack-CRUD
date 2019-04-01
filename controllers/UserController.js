const express = require('express');
var router = express.Router();

var { User } = require('../models/employee');

// => localhost:3000/users/
router.get('/', (req, res) => {
  User.find((err, docs) => {
    if (!err) { res.send(docs);}
    else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2))}
  });
});

module.exports = router;
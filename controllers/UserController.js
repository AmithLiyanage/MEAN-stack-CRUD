const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user');

// => localhost:3000/users/
router.get('/', (req, res) => {
  User.find((err, docs) => {
    if (!err) { res.send(docs);}
    else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
  });
});

// get id's => localhost:3000/users/id
router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  User.findById(req.params.id, (err, doc) => {
    if (!err) { res.send(doc);}
    else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/', (req, res) => {
  var cuser = new User ({
    name: req.body.name,
    equipment: req.body.equipment,
    time: req.body.time, 
    damage: req.body.damage
  });
  cuser.save((err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var cuser = ({
    name: req.body.name,
    equipment: req.body.equipment,
    time: req.body.time, 
    damage: req.body.damage
  });
  User.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
  });

module.exports = router;  
const db = require("../models");

//methods to be applied to model 
module.exports = {
  findAll: (req, res) => {
    db.Contact
      .find(req.query)
      .sort({ lastName: 1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err))
  },
  findById: (req, res) => {
    db.Contact
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: (req, res) => {
    db.Contact
      //search by first or lastname
      .find({ $or: [{ lastName: req.params.category }, { firstName: req.params.category }] })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Contact
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err))
  },
  update: (req, res) => {
    db.Contact
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Contact
      .findById(req.params.id)
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};

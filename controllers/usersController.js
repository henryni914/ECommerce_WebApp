const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.UserList.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("req.body: " + JSON.stringify(req.body))
        db.UserList.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
};
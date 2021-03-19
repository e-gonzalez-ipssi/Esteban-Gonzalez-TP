const { Annonce } = require("../models");

const getAnnonces = (req, res, next) => {
  Annonce.find()
    .then((annonces) => {
      res.send(annonces);
    })
    .catch(next);
};

const getAnnonceByID = (req, res, next) => {
  Annonce.findById(req.params.id)
    .then((annonces) => {
      res.send(annonces);
    })
    .catch(next);
};

const createAnnonce = (req, res, next) => {
  Annonce.create(req.body)
    .then((annonces) => {
      res.send(annonces);
    })
    .catch(next);
};

const updateAnnonceByID = (req, res, next) => {
  const { id } = req.params;

  Annonce.findByIdAndUpdate(id, req.body)
    .then(() => {
      Annonce.findById(id).then((annonces) => {
        res.send(annonces);
      });
    })
    .catch(next);
};

const deleteAnnonceByID = (req, res, next) => {
  Annonce.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("deleted");
    })
    .catch(next);
};

module.exports = {
  getAnnonces,
  getAnnonceByID,
  createAnnonce,
  updateAnnonceByID,
  deleteAnnonceByID,
};

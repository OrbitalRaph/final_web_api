var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Personnage = require('../models/personnage');

/* GET personnages listing. */
router.get('/', async (req, res) => {
  /*
  #swagger.tags = ['Personnages']
  #swagger.description = 'Récupère la liste des personnages.'
  #swagger.responses[200] = {
    description: 'Liste des personnages.',
    schema: { $ref: "#/definitions/Personnage" }
  }
  #swagger.responses[500] = {
    description: 'Une erreur est survenue...'
  }
  */
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    res.json(await Personnage.find());
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Une erreur est survenue...' });
  } finally {
    mongoose.connection.close();
  }
});

/* GET personnages filtered by request query */
router.get('/filters', async (req, res) => {
  /*
  #swagger.tags = ['Personnages']
  #swagger.description = 'Récupère la liste des personnages filtrés par les paramètres de la requête.'
  #swagger.responses[200] = {
    description: 'Liste des personnages filtrés.',
    schema: { $ref: "#/definitions/Personnage" }
  }
  #swagger.responses[500] = {
    description: 'Une erreur est survenue...'
  }
  */
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    res.json(await Personnage.find(req.query));
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Une erreur est survenue...' });
  } finally {
    mongoose.connection.close();
  }
});

/* POST personnages. */
router.post('/', async (req, res) => {
  /*
  #swagger.tags = ['Personnages']
  #swagger.description = 'Crée un nouveau personnage.'
  #swagger.parameters['personnage'] = {
    in: 'body',
    description: 'Informations du personnage à créer.',
    schema: { $ref: "#/definitions/Personnage" }
  }
  #swagger.responses[200] = {
    description: 'Personnage créé.',
    schema: { $ref: "#/definitions/Personnage" }
  }
  #swagger.responses[500] = {
    description: 'Une erreur est survenue...'
  }
  */
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    res.json(await Personnage.create(req.body));
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Une erreur est survenue...' });
  } finally {
    mongoose.connection.close();
  }
});

/* PUT personnages. */
router.put('/:id', async (req, res) => {
  /*
  #swagger.tags = ['Personnages']
  #swagger.description = 'Modifie un personnage.'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Identifiant du personnage à modifier.',
    type: 'string'
  }
  #swagger.parameters['personnage'] = {
    in: 'body',
    description: 'Informations du personnage à modifier.',
    schema: { $ref: "#/definitions/Personnage" }
  }
  #swagger.responses[200] = {
    description: 'Personnage modifié.',
    schema: { $ref: "#/definitions/Personnage" }
  }
  #swagger.responses[500] = {
    description: 'Une erreur est survenue...'
  }
  */
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    res.json(await Personnage.findByIdAndUpdate
      (req
        .params
        .id
        .toString(), req.body));
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Une erreur est survenue...' });
  } finally {
    mongoose.connection.close();
  }
});

/* DELETE personnages. */
router.delete('/:id', async (req, res) => {
  /*
  #swagger.tags = ['Personnages']
  #swagger.description = 'Supprime un personnage.'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Identifiant du personnage à supprimer.',
    type: 'string'
  }
  #swagger.responses[200] = {
    description: 'Personnage supprimé.',
    schema: { $ref: "#/definitions/Personnage" }
  }
  #swagger.responses[500] = {
    description: 'Une erreur est survenue...'
  }
  */
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    res.json(await Personnage.findByIdAndDelete(req.params.id));
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Une erreur est survenue...' });
  } finally {
    mongoose.connection.close();
  }
});

module.exports = router;

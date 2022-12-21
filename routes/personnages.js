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
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    res.json(await Personnage.find().sort({ name: 1 }));
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Une erreur est survenue...' });
  } finally {
    mongoose.connection.close();
  }
});

/* GET personnages by id. */
router.get('/id/:id', async (req, res) => {
  /*
  #swagger.tags = ['Personnages']
  #swagger.description = 'Récupère un personnage par son id.'
  #swagger.responses[200] = {
    description: 'Personnage.',
    schema: { $ref: "#/definitions/Personnage" }
  }
  #swagger.responses[404] = {
    description: 'Personnage non trouvé.'
  }
  #swagger.responses[500] = {
    description: 'Une erreur est survenue...'
  }
  */
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const id = req.params.id;
    const objectId = mongoose.Types.ObjectId(id);

    const personnage = await Personnage.findById(objectId);
    if (personnage) {
      res.json(personnage);
    } else {
      res.status(404).json({ message: 'Personnage non trouvé.' });
    }
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
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const query = req.query;
    const filters = {};

    if (typeof query.element === 'string') {
      filters.element = query.element;
    }
    if (typeof query.weapon_type === 'string') {
      filters.weapon_type = query.weapon_type;
    }
    if (typeof query.rarity === 'string') {
      filters.rarity = query.rarity;
    }
    
    res.json(await Personnage.find(filters).sort({ name: 1 }));
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
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
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
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
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
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    res.json(await Personnage.findByIdAndDelete(req.params.id));
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Une erreur est survenue...' });
  } finally {
    mongoose.connection.close();
  }
});

module.exports = router;

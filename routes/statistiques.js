var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Personnage = require('../models/personnage');

/* GET nombres de personnages par élément. */
router.get('/elements', async (req, res) => {
    /*
    #swagger.tags = ['Statistiques']
    #swagger.description = 'Récupère le nombre de personnages par élément.'
    #swagger.responses[200] = {
        description: 'Nombre de personnages par élément.',
        schema: { $ref: "#/definitions/Statistique" }
    }
    #swagger.responses[500] = {
        description: 'Une erreur est survenue...'
    }
    */
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        res.json(await Personnage.aggregate([
            { $group: { _id: "$element", count: { $sum: 1 } } }
        ]));
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Une erreur est survenue...' });
    } finally {
        mongoose.connection.close();
    }
});

/* GET nombres de personnages par type d'arme. */
router.get('/weapons', async (req, res) => {
    /*
    #swagger.tags = ['Statistiques']
    #swagger.description = 'Récupère le nombre de personnages par type d\'arme.'
    #swagger.responses[200] = {
        description: 'Nombre de personnages par type d\'arme.',
        schema: { $ref: "#/definitions/Statistique" }
    }
    #swagger.responses[500] = {
        description: 'Une erreur est survenue...'
    }
    */
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        res.json(await Personnage.aggregate([
            { $group: { _id: "$weapon_type", count: { $sum: 1 } } }
        ]));
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Une erreur est survenue...' });
    } finally {
        mongoose.connection.close();
    }
});

/* GET nombres de personnages par rareté. */
router.get('/rarities', async (req, res) => {
    /*
    #swagger.tags = ['Statistiques']
    #swagger.description = 'Récupère le nombre de personnages par rareté.'
    #swagger.responses[200] = {
        description: 'Nombre de personnages par rareté.',
        schema: { $ref: "#/definitions/Statistique" }
    }
    #swagger.responses[500] = {
        description: 'Une erreur est survenue...'
    }
    */
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        res.json(await Personnage.aggregate([
            { $group: { _id: "$rarity", count: { $sum: 1 } } }
        ]));
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Une erreur est survenue...' });
    } finally {
        mongoose.connection.close();
    }
});

module.exports = router;
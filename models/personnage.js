const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personnageSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    weapon_type: { type: String, required: true },
    element: { type: String, required: true },
    affiliation: { type: String, required: true },
    region: { type: String, required: true },
    rarity: { type: Number, required: true, min: 3, max: 5 },
    birthday: { type: String, required: true },
    constellation: { type: String, required: true },
    constellations: [{
        name: String,
        level: Number
    }],
    passives: [String],
    skills: [{
        name: String,
        attributes: [{
            label: String,
            value: String
        }]
    }]
}, { collection : 'personnage' });

module.exports = mongoose.model('Personnage', personnageSchema);

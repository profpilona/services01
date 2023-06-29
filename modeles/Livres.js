// schéma de données pour les Livres
// Date: 29 juin 2023
// Alain Pilon

const mongoose = require('mongoose');

let schemaLivre = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    titre: {
        type: String,
        required: true        
    },
    auteur: {
        type: String,
        required: true
    },
    editeur: {
        type: String,
        required: true
    },
    nbPages: {
        type: Number,
        required: true
    },
    langue: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

let Livres = module.exports = mongoose.model('livres', schemaLivre);

// fonction pour obtenir tous les livres de la collection
// reçoit en paramètre un callback et le nombre maximum (limit) de livres à retourner
module.exports.getLivres = (callback, limit) => {
    Livres.find(callback).limit(limit);
}
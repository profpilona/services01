// schéma de données pour les Usagers
// Date: 29 juin 2023
// Alain Pilon

const mongoose = require('mongoose');

let schemaUsagers = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

let Users = module.exports = mongoose.model('usagers', schemaUsagers);

// fonction pour obtenir tous les usagers de la collection
// reçoit en paramètre un callback et le nombre maximum (limit) de usagers à retourner
module.exports.getUsers = (callback, limit) => {
    Users.find(callback).limit(limit);
}
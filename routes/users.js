// fichier des routes dont le préfixe /api/users
// Date: 29 juin 2023
// alain Pilon

const express = require('express');
const router = express.Router();
const Users = require('../modeles/Users');

router.get('/', (requete, reponse)=>{
    Users.getUsers((err, usagers)=>{
        if (err) throw err;
        reponse.json(usagers);
    }, 25);
});

module.exports = router;
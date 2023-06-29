// fichier des routes dont le préfixe /api/livres
// Date: 29 juin 2023
// alain Pilon

const express = require('express');
const router = express.Router();
const Livres = require('../modeles/Livres');

router.get('/', (requete, reponse)=>{
    Livres.getLivres((err, livres)=>{
        if (err) throw err;
        reponse.json(livres);
    }, 25);
});
router.get('/kekchose', (requete, reponse)=>{
    reponse.send('kek chose');
});
router.get('/autre', (requete, reponse)=>{
    reponse.send('autre chose');
});
router.get('/abc', (requete, reponse) => {
    reponse.send('abc');
});
module.exports = router;
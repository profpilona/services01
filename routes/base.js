// fichier des routes dont le préfixe /
// Date: 29 juin 2023
// alain Pilon

const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse)=>{
    reponse.send('SVP, utilisez /api/livres pour obtenir des livres!');
});

router.get('/aide', (requete, reponse) => {
    reponse.send('Vous etes dans la page /aide...');
});

router.get('/index.html', (requete, reponse)=> {
    reponse.send('Vous etes dans la page index.html');
})

module.exports = router;